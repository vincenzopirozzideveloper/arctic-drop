"""
Generate all hero + product imagery for the arctic-drop editorial e-commerce
study using Gemini 3.1 Flash Image (Nano Banana 2).

All images share a strict style contract so the grid reads as a single shoot:
- flat dusty-blue studio background, hex near #8EA1AB
- soft cinematic side key light, subtle rim, shadow below feet
- single subject, centered, no clutter, no other people
- same colour grading across the set (cool desaturated, teal shadows)
- no logos, no text, no brand marks embedded in the garments
- no real-person likeness attempt; generic editorial silhouette

Usage: python3 scripts/generate-images.py
Outputs to: public/img/*.jpg
"""
from __future__ import annotations

import base64
import concurrent.futures
import json
import os
import sys
import time
import urllib.request
import urllib.error

API_KEY_PATH = "/root/.gemini-api-key"
MODEL = "gemini-3.1-flash-image-preview"
ENDPOINT = (
    f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
)
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "img")
os.makedirs(OUT_DIR, exist_ok=True)

STYLE_SUFFIX = (
    " Editorial fashion campaign still. Flat matte studio background in a "
    "single cool dusty blue-grey tone (hex approximately #8EA1AB). Soft "
    "cinematic key light from camera-left, gentle rim light, subtle floor "
    "shadow. Cool desaturated colour grading with faintly teal shadows. No "
    "visible text, no logo, no brand mark, no graffiti. Clean composition, "
    "single subject, no other people in frame. Photorealistic, 35mm lens "
    "feel, shallow depth of field, premium outdoor technical garment. "
    "Square 1024x1024."
)

JOBS = [
    (
        "hero-main",
        "Close-up editorial portrait of a male model wearing an oversized "
        "matte white technical puffer jacket with a generous raised hood, "
        "large mirrored silver ski goggles covering the eyes, hood pulled up "
        "framing the face, shoulders and upper chest visible, direct frontal "
        "stance, slight low-angle. Head-and-shoulders crop, tight framing."
    ),
    (
        "hero-thumb-1",
        "Three-quarter side view of a male model in a matte white oversized "
        "puffer jacket with raised hood and mirrored silver ski goggles. "
        "Head-and-torso crop, body angled 45 degrees away from camera."
    ),
    (
        "hero-thumb-2",
        "Back-and-shoulder editorial shot of a male model wearing a matte "
        "white oversized puffer jacket, hood up, seen from behind at a "
        "slight 20-degree twist revealing the side of the goggles. Upper "
        "body crop only."
    ),
    (
        "aurora-promo",
        "Side profile editorial shot of a male model in a pale silver-grey "
        "reflective technical puffer jacket with a massive padded hood "
        "raised, large mirrored ski goggles, body turned to camera-right, "
        "half-body crop, cinematic mood."
    ),
    (
        "aurora-silver",
        "Full-body editorial studio shot of a male model wearing a silver "
        "reflective oversized puffer jacket, matching cargo pants, white "
        "sneakers, mirrored silver goggles on forehead, neutral stance, "
        "centred composition, feet visible."
    ),
    (
        "orbit-silver",
        "Full-body editorial shot of a male model in a high-gloss metallic "
        "silver puffer jacket, matching metallic pants, white boots, no "
        "goggles, hood up, looking at camera, centred, feet visible."
    ),
    (
        "stealth-black",
        "Full-body editorial shot of a male model wearing a matte black "
        "heavy shield technical puffer jacket with dark hood raised, dark "
        "tapered trousers, dark boots, neutral stance, centred, feet "
        "visible."
    ),
    (
        "glacier-white",
        "Full-body editorial shot of a male model wearing an insulated "
        "off-white quilted puffer jacket, cream cargo pants, cream "
        "technical boots, grey ski goggles lowered around neck, hood down, "
        "full length, feet visible."
    ),
    (
        "polar-gloss",
        "Full-body editorial shot of a male model in a glossy mid-blue "
        "puffer jacket, dark blue denim trousers, dark boots, no goggles, "
        "hands at sides, centred, feet visible."
    ),
    (
        "onyx-black",
        "Full-body editorial shot of a male model in a deep navy-black "
        "technical puffer jacket with subtle sheen, black utility pants, "
        "dark boots, small dark sunglasses, neutral stance, centred, feet "
        "visible."
    ),
    (
        "icefield-blue",
        "Full-body editorial shot of a male model wearing a steel-blue "
        "puffer jacket with visible stitched panels, matching blue cargo "
        "trousers, grey technical boots, mirrored silver goggles over eyes, "
        "hood up, centred, feet visible."
    ),
    (
        "polar-white",
        "Full-body editorial shot of a male model wearing a long oversized "
        "off-white shell puffer jacket, matching cream trousers, cream "
        "boots, small mirrored goggles on forehead, hood down, centred, "
        "feet visible."
    ),
]


def call_api(api_key: str, prompt: str) -> bytes:
    body = {
        "contents": [{"parts": [{"text": prompt + STYLE_SUFFIX}]}],
    }
    req = urllib.request.Request(
        f"{ENDPOINT}?key={api_key}",
        method="POST",
        headers={"Content-Type": "application/json"},
        data=json.dumps(body).encode("utf-8"),
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        payload = json.loads(resp.read())
    for part in payload["candidates"][0]["content"]["parts"]:
        inline = part.get("inlineData") or part.get("inline_data")
        if inline is not None:
            return base64.b64decode(inline["data"])
    raise RuntimeError(f"no image in response: {json.dumps(payload)[:400]}")


def generate_one(api_key: str, name: str, prompt: str) -> tuple[str, int, str]:
    out_path = os.path.join(OUT_DIR, f"{name}.jpg")
    if os.path.exists(out_path) and os.path.getsize(out_path) > 50_000:
        return (name, os.path.getsize(out_path), "cached")
    last_err = ""
    for attempt in range(3):
        try:
            data = call_api(api_key, prompt)
            with open(out_path, "wb") as f:
                f.write(data)
            return (name, len(data), "ok")
        except (urllib.error.HTTPError, urllib.error.URLError, RuntimeError) as e:
            last_err = str(e)
            time.sleep(2 * (attempt + 1))
    return (name, 0, f"FAIL: {last_err[:200]}")


def main() -> None:
    with open(API_KEY_PATH) as f:
        api_key = f.read().strip()
    t0 = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
        futures = {
            ex.submit(generate_one, api_key, name, prompt): name
            for name, prompt in JOBS
        }
        for fut in concurrent.futures.as_completed(futures):
            name, size, status = fut.result()
            print(f"[{status:10}] {name:20} {size:>10} bytes")
    dt = time.time() - t0
    print(f"Total: {dt:.1f}s")


if __name__ == "__main__":
    main()

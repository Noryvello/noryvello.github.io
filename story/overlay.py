#!/usr/bin/env python3
"""Overlay crisp Story text on the generated gift background. Output: 1080x1920 JPG."""
from PIL import Image, ImageDraw, ImageFont
import os

SRC = "/home/hatch/workspace/noryvello/story/media-generation-story-bg-gift-0-dfad5b0f-49ee-4fdf-8c59-f05b9ade24d7.webp"
OUT = "/home/hatch/workspace/noryvello/story/noryvello-story-gift-idea.jpg"
FONT_DIR = "/usr/share/fonts/truetype/dejavu"

def font(name, size):
    p = os.path.join(FONT_DIR, name)
    return ImageFont.truetype(p, size)

im = Image.open(SRC).convert("RGB").resize((1080, 1920), Image.LANCZOS)
d = ImageDraw.Draw(im)
W = 1080

INDIGO = (67, 56, 202)
TEAL = (13, 148, 136)
CHARCOAL = (68, 64, 60)
ORANGE = (194, 65, 12)
WHITE = (255, 255, 255)

def center_text(y, text, fnt, fill):
    box = d.textbbox((0, 0), text, font=fnt)
    w = box[2] - box[0]
    d.text(((W - w) / 2 - box[0], y), text, font=fnt, fill=fill)
    return box[3] - box[1]

# Brand, two-tone, top
fb = font("DejaVuSans-Bold.ttf", 56)
b1, b2 = "Nory", "vello"
w1 = d.textbbox((0, 0), b1, font=fb)[2]
w2 = d.textbbox((0, 0), b2, font=fb)[2]
x0 = (W - w1 - w2) / 2
d.text((x0, 140), b1, font=fb, fill=INDIGO)
d.text((x0 + w1, 140), b2, font=fb, fill=TEAL)

# Headline
fh = font("DejaVuSans-Bold.ttf", 98)
center_text(330, "Stuck on a", fh, INDIGO)
center_text(455, "birthday gift?", fh, INDIGO)

# Sub
fs = font("DejaVuSans.ttf", 54)
center_text(660, "Get the perfect idea", fs, CHARCOAL)
center_text(730, "in 10 seconds.", fs, CHARCOAL)

# Pill: FREE - No sign-up
fp = font("DejaVuSans-Bold.ttf", 44)
pill_text = "FREE  -  No sign-up"
pb = d.textbbox((0, 0), pill_text, font=fp)
pw, ph = pb[2] - pb[0], pb[3] - pb[1]
px0, py0 = (W - pw) / 2 - 46, 860
px1, py1 = (W + pw) / 2 + 46, 860 + ph + 44
d.rounded_rectangle([px0, py0, px1, py1], radius=(py1 - py0) // 2, fill=TEAL)
d.text(((W - pw) / 2 - pb[0], py0 + 20 - pb[1]), pill_text, font=fp, fill=WHITE)

# CTA
fc = font("DejaVuSans-Bold.ttf", 46)
center_text(1010, "Tap the link to try it!", fc, ORANGE)

im.save(OUT, "JPEG", quality=92)
print("saved", OUT, im.size, os.path.getsize(OUT), "bytes")

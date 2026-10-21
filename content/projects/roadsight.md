---
title: RoadSight
tag: computer vision
summary: Judges road damage from a photo, 96.8% accurate on photos it had never seen. It also learned to say "that's not a road" to the moon, a meal, or a face.
order: 2
featured: false
image: ""
stats:
  - value: 96.8%
    label: condition accuracy on held-out photos
  - value: 0 / 30
    label: non-road images accepted
links:
  - label: GitHub
    url: https://github.com/PrathamAgarwal1/Road-Damage-Detection-and-Reporting-System
---

## What it is

Citizens report damaged roads with a photo. The AI checks that the photo really shows a road and rates its condition, the system forecasts how fast the damage will get worse, and municipal teams get a dashboard to prioritise, schedule and track repairs.

## How the AI works

One small vision-language model, **MobileCLIP2-S2**, makes two decisions from a single pass, in about 160 ms per photo on a CPU:

1. **Is this a road?** The photo is compared against descriptions of roads and about 40 kinds of things that aren't (planets, documents, people, food, rooms…). This needs no training data, so it holds up on photos unlike anything in the dataset.
2. **What condition is it in?** A classifier trained on the dataset is blended with the model's own zero-shot judgement, which counters a camera bias in the dataset.

On a held-out test split: 96.8% condition accuracy over 311 photos, and 0 of 30 non-road images accepted.

## Around the model

- **Duplicate and fraud filtering:** rejects the same photo twice, visually similar photos within 50 m, and repeat reports from one person.
- **Weather-based forecast:** rain, freeze–thaw cycles and temperature swings from Open-Meteo estimate when a road will reach the next worse category.
- **Priority:** 60% severity, 25% weather risk, 15% crowd evidence.
- **Live map** of every report and its repair status, plus an admin dashboard with hotspots.

Built with Flask, MongoDB, MobileCLIP2, YOLOv8 (for the road overlay) and Leaflet.

## Limitations

The dataset has about 2,000 photos from only three sources, and the "Poor" class is the weakest. More varied phone photos would help most.

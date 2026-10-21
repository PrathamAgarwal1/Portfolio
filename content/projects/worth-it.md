---
title: Worth It?
tag: machine learning · Chrome extension
summary: What you click isn't always what you enjoy. I trained a model to tell the two apart on 1.19 million randomly shown videos, then built a Chrome extension that asks after every YouTube video, "was that worth it?"
order: 1
featured: true
image: /media/worth-it-feed.jpg
stats:
  - value: −4.3 pp
    label: regretted clicks in the top 10
  - value: 49 → 78%
    label: regret, first vs 64th video in a row
links:
  - label: Website
    url: https://prathamagarwal1.github.io/Worth-it/
  - label: Download for Chrome
    url: https://github.com/PrathamAgarwal1/Worth-it/raw/main/docs/worth-it.zip
  - label: GitHub
    url: https://github.com/PrathamAgarwal1/Worth-it
---

## The idea

Neuroscientists Kent Berridge and Terry Robinson showed that **wanting** (the dopamine-driven pull towards something) and **liking** (actually enjoying it) run on separate brain systems. That's why you can keep clicking on things that don't make you happy.

YouTube's recommender learns from what you *click*, which is wanting. Worth It? also measures what you *like*, with one quick question in a slim bar under every video: "Was that worth it?" Then it flags the junk food on your feed and suggests what's actually worth your time.

![The "Worth it?" bar under the video player](/media/worth-it-watch.jpg)

## What it does

- **Spots the hook** in every title and thumbnail: curiosity gap, outrage, fear, FOMO, social proof, hype, shouting, loud thumbnails.
- **Asks "worth it?"** with five faces under the player. Experience sampling: rating in the moment, not from memory.
- **Learns your own wanting and liking**: which hooks make you click, and which actually pay off, per hook and per channel.
- **Flags junk food from your track record** (risky, junk food, worth it), only once the evidence is confident.
- **Suggests worth-it picks** from the current page, ranked by `liking − λ · max(0, wanting − liking)`.
- **"Your Brain on YouTube" report**: week-by-week worth-it rate, regretted time, triggers, worst hours and rabbit holes.

![The Your Brain on YouTube report, with demo data](/media/worth-it-report.png)

## The study behind it

Before building the extension, I tested the idea offline on KuaiRand, a dataset where videos were inserted into people's feeds at random, so the results aren't biased by a recommender. A multi-task PyTorch model predicts wanting (clicks) and liking (likes, long views, follows, shares) separately, then ranks for liking with a penalty on the gap.

Compared with a click-trained model, it cut regretted clicks in the top 10 by 4.3 percentage points (95% CI −4.7 to −3.9), at a real cost to engagement. Its predicted want–like gap tracked the observed one (Spearman ρ = 0.37 over 3,820 videos), and regret climbed from 49% on the first video of a session to 78% beyond the 64th.

![Engagement against satisfaction across the λ sweep](/media/worth-it-study.png)

## Privacy

Everything stays in your browser. There are no accounts, servers or analytics.

## Limitations

- Hook detection is rule-based and English-only.
- "Liking" here is behavioural, not neural: ratings and watch time stand in for enjoyment.
- It's self-tracking, not a clinical tool. The patterns are correlations.

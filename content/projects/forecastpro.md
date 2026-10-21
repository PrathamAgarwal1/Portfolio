---
title: ForecastPro
tag: forecasting · NLP
summary: Buy now or wait? It forecasts a product's price and summarises what the reviews say.
order: 4
featured: false
image: ""
stats: []
links:
  - label: GitHub
    url: https://github.com/PrathamAgarwal1/RealTimeCompetitorStrategyTracker
---

## What it is

An AI-driven decision-support dashboard for e-commerce products. It forecasts prices, analyses review sentiment, and combines the two into a "buy or wait" recommendation.

## How it works

- **Price forecasting** with Facebook Prophet and Amazon Chronos.
- **Sentiment analysis** of reviews with an LLM via Groq.
- **Scraping** of prices and reviews from Flipkart.
- **Decision engine** that weighs the price forecast against sentiment.

Built with FastAPI and SQLite, packaged with Docker, and tested with pytest in CI.

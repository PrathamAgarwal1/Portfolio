---
title: ML Pipeline Visualiser
tag: machine learning
summary: A glass box instead of a black box. Upload a dataset and watch every step of a machine learning pipeline, with the notebooks that explain it alongside.
order: 3
featured: false
image: ""
stats:
  - value: "7"
    label: models trained and compared
links:
  - label: GitHub
    url: https://github.com/PrathamAgarwal1/ML-Pipeline-Visualiser
---

## What it is

A lightweight, explainable machine learning pipeline built for demonstrations. Instead of hiding the logic in scripts, the Streamlit app imports it straight from documented Jupyter notebooks, so you can read the theory, see the exact code that runs, and then watch the results in the app.

## What it does

- **Upload any CSV** dataset.
- **Interactive preprocessing:** handle missing values (mean, median, mode or drop), encode categories, and scale features.
- **Exploration:** correlation heatmaps and descriptive statistics.
- **Train and compare models:** logistic regression, KNN and SVM for classification; linear regression and random forest for regression; k-means and hierarchical clustering.
- **Metrics:** accuracy, RMSE, silhouette scores and confusion matrices.

Built with Streamlit, scikit-learn, pandas, NumPy, Matplotlib and Seaborn.

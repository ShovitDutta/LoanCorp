# LoanCorp

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-40B8A0?style=for-the-badge&logo=drizzle&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-20232A?style=for-the-badge&logo=zustand&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Keras Tuner](https://img.shields.io/badge/Keras_Tuner-D00000?style=for-the-badge&logo=keras&logoColor=white)
![Optuna](https://img.shields.io/badge/Optuna-000000?style=for-the-badge&logo=optuna&logoColor=white)
![SentenceTransformers](https://img.shields.io/badge/SentenceTransformers-000000?style=for-the-badge&logo=huggingface&logoColor=white)
![License](https://img.shields.io/badge/License-UNLICENSED-red.svg)

## Project Overview

LoanCorp is a project aimed at building a smart model to accurately predict a borrower's capacity to borrow. It leverages a detailed dataset on potential borrowers, including residence type, monthly income, previous loan history, marital status, number of dependents, city, state, and additional textual data. The project integrates both a Node.js application for handling borrower data and a Python-based machine learning pipeline for predictive modeling.

## Technology Stack

### Node.js Application (Frontend & Backend)

*   **Framework**: Next.js (React)
*   **Database ORM**: Drizzle ORM (with Better SQLite3)
*   **Schema Validation**: Zod
*   **Authentication**: NextAuth
*   **State Management**: Zustand
*   **Data Fetching**: Tanstack Query
*   **Styling**: Tailwind CSS

### Python ML Model (Data Science & Machine Learning)

*   **Deep Learning Frameworks**: Keras, PyTorch
*   **Hyperparameter Tuning**: Keras Tuner, Optuna
*   **LLM Integration**: SentenceTransformers (for BERT/RoBERTa variants)
*   **Data Manipulation**: Pandas, NumPy (implied)
*   **Machine Learning Utilities**: Scikit-learn (implied for data preprocessing)

## Key Features & Ongoing Work

### Node.js Application

*   **Borrower Signup API**: An API endpoint (`/api/borrower-signup`) for receiving and validating borrower data.
*   **Database Integration**: Storage of borrower information using Drizzle ORM and SQLite.
*   **User Interface**: (Implied by Next.js setup) Frontend components for borrower interaction.

### Python ML Model

The core of the predictive modeling is structured into the following phases:

1.  **Data Preparation**:
    *   Dropping unnecessary features (e.g., names, emails).
    *   Handling missing data (imputation or removal).
    *   Encoding categorical variables (One-Hot Encoding).
    *   Scaling numerical features.
    *   **LLM-Driven Text Feature Engineering**: Generating dense vector representations (embeddings) of textual data using pre-trained LLMs (e.g., SentenceTransformers), extracting sentiment, and identifying keywords/topics. These features are integrated into the main dataset.

2.  **Model Development**:
    *   Building and training Neural Networks using Keras and PyTorch.
    *   Integrating LLM-derived features into both Keras and PyTorch models.
    *   Automated hyperparameter tuning using Keras Tuner and Optuna to optimize model performance.
    *   Data splitting: 80% for training, 20% for testing.

3.  **Evaluation**:
    *   Measuring model performance using Mean Squared Error (MSE) on test data.
    *   Comparing Keras and PyTorch model performance to select the best model.

4.  **Insights and Interpretability**:
    *   Analyzing trained models to understand the most influential factors affecting borrowing capacity (e.g., income, location, past loan history, LLM-derived insights from text).


## Future Enhancements / TODOs

*   Implement the full data preparation pipeline in Python, including LLM-driven text feature engineering.
*   Complete the Keras and PyTorch model development and hyperparameter tuning.
*   Integrate the trained Python ML model with the Node.js application (e.g., via an API endpoint or message queue) for real-time predictions.
*   Develop comprehensive frontend for borrower interaction and display of prediction results.
*   Implement robust error handling and logging across both applications.
*   Further explore advanced LLM techniques for deeper textual insights.
*   Consider deployment strategies for both the Node.js application and the Python ML service.

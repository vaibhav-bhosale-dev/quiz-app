# Project Title
Quiz App (API-based)
## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Stepa](#steps)
- [API Endpoints](#api-endpoints)

## Introduction
Build a RESTful APIs for a quiz application that allows users to answer multiple-choice
questions and receive feedback on their performance.

## Features
Create Quiz:
o Endpoint to create a new quiz with a set of questions.
o Each question should have 4 answer options and indicate the correct
answer.

Get Quiz:
o Endpoint to fetch a quiz by its ID.
o Return the questions without revealing the correct answers.

Submit Answer:
o Endpoint to submit an answer for a specific question in a quiz.
o Return immediate feedback if the answer is correct or incorrect and provide
the correct answer if the user was wrong.

• Get Results:
o Endpoint to get the user's results for a specific quiz.
o Return the score and a summary of the user's answers (correct/incorrect).

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/vaibhav-bhosale-dev/quiz-app.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the application:
    ```bash
    npm start
    ```



## API Endpoints
You can use below endpoits 
URL: http://localhost:3000/api/quiz
### Create a Quiz
- **URL**: `/`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "Sample Quiz",
    "questions": [
      {
        "id": "q1",
        "text": "What is 2+3?",
        "options": ["3", "4", "5", "6"],
        "correct_option": 3
      }
    ]
  }

- **RESPONSE**:
    ```json
    {
    "id": "53443780-e361-4a8c-a9c6-cf7d341620fd",
    "title": "Sample Quiz",
    "questions": [
        {
            "id": "q1",
            "text": "What is 2+3?",
            "options": [
                "3",
                "4",
                "5",
                "6"
            ],
            "correct_option": 3
        }
    ]
    }
### Get a Quiz
- **URL**: `/:quizId`
- **Method**: `GET`

- **RESPONSE**:
    ```json
    {
    "id": "53443780-e361-4a8c-a9c6-cf7d341620fd",
    "title": "Sample Quiz",
    "questions": [
        {
            "id": "q2",
            "text": "What is 2+3?",
            "options": [
                "3",
                "4",
                "5",
                "6"
            ]
        }
    ]
    }
### Submit Answer
- **URL**: `/:quizId/questions/:questionId/answer`
- **Method**: `POST`
- **Body**:
  ```json
    {
    "selectedOption":3
    }

- **RESPONSE**:
    ```json
    {
    "isCorrect": true
    }
### Get Results
- **URL**: `/:quizId/results`
- **Method**: `POST`
- **Body**:
  ```json
    {
    "answers": [
        {
            "questionId": "q1",
            "selectedOption": 3
        }
    ]
    }

- **RESPONSE**:
    ```json
    {
    "quizId": "53443780-e361-4a8c-a9c6-cf7d341620fd",
    "score": 1,
    "result": [
        {
            "questionId": "q1",
            "isCorrect": true
        }
    ]
    }

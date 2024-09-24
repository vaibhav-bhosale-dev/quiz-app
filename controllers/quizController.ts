import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';

// Create Quiz
export const createQuiz = (req: Request, res: Response) => {
  const { title, questions } = req.body;

  // Validate title and questions array
  if (!title || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ message: 'Title and questions are required.' });
  }

  const quiz = Quiz.createQuiz(title, questions);
  return res.status(201).json(quiz);
};

// Get Quiz
export const getQuiz = (req: Request, res: Response) => {
  const { id } = req.params;
  const quiz = Quiz.getQuizById(id);

  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found.' });
  }

  const questions = quiz.questions.map(q => ({
    id: q.id,
    text: q.text,
    options: q.options
  }));

  return res.json({ id: quiz.id, title: quiz.title, questions });
};

// Submit Answer
export const submitAnswer = (req: Request, res: Response) => {
  const { quizId, questionId } = req.params;
  const { selectedOption } = req.body;

  const quiz = Quiz.getQuizById(quizId);

  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found.' });
  }

  const question = quiz.questions.find(q => q.id === questionId);

  if (!question) {
    return res.status(404).json({ message: 'Question not found.' });
  }

  const isCorrect = question.correct_option === selectedOption;
  return res.json({
    isCorrect,
    correctAnswer: isCorrect ? undefined : question.correct_option
  });
};

// Get Results
export const getResults = (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { answers } = req.body;

  const quiz = Quiz.getQuizById(quizId);
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found.' });
  }

  let score = 0;
  const result = answers.map((answer: { questionId: string; selectedOption: number }) => {
    const question = quiz.questions.find(q => q.id === answer.questionId);
    const isCorrect = question?.correct_option === answer.selectedOption;
    if (isCorrect) score++;
    return { questionId: question?.id, isCorrect };
  });

  return res.json({
    quizId,
    score,
    result
  });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = exports.submitAnswer = exports.getQuiz = exports.createQuiz = void 0;
const Quiz_1 = require("../models/Quiz");
// Create Quiz
const createQuiz = (req, res) => {
    const { title, questions } = req.body;
    // Validate title and questions array
    if (!title || !Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ message: 'Title and questions are required.' });
    }
    const quiz = Quiz_1.Quiz.createQuiz(title, questions);
    return res.status(201).json(quiz);
};
exports.createQuiz = createQuiz;
// Get Quiz
const getQuiz = (req, res) => {
    const { id } = req.params;
    const quiz = Quiz_1.Quiz.getQuizById(id);
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
exports.getQuiz = getQuiz;
// Submit Answer
const submitAnswer = (req, res) => {
    const { quizId, questionId } = req.params;
    const { selectedOption } = req.body;
    const quiz = Quiz_1.Quiz.getQuizById(quizId);
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
exports.submitAnswer = submitAnswer;
// Get Results
const getResults = (req, res) => {
    const { quizId } = req.params;
    const { answers } = req.body;
    const quiz = Quiz_1.Quiz.getQuizById(quizId);
    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found.' });
    }
    let score = 0;
    const result = answers.map((answer) => {
        const question = quiz.questions.find(q => q.id === answer.questionId);
        const isCorrect = (question === null || question === void 0 ? void 0 : question.correct_option) === answer.selectedOption;
        if (isCorrect)
            score++;
        return { questionId: question === null || question === void 0 ? void 0 : question.id, isCorrect };
    });
    return res.json({
        quizId,
        score,
        result
    });
};
exports.getResults = getResults;

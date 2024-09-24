"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const uuid_1 = require("uuid");
const quizzes = [];
class Quiz {
    constructor(title, questions) {
        this.id = (0, uuid_1.v4)();
        this.title = title;
        this.questions = questions;
    }
    static createQuiz(title, questions) {
        const quiz = new Quiz(title, questions);
        quizzes.push(quiz);
        return quiz;
    }
    static getQuizById(id) {
        return quizzes.find(quiz => quiz.id === id);
    }
}
exports.Quiz = Quiz;

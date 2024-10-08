"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quizController_1 = require("./../controllers/quizController");
const router = (0, express_1.Router)();
router.post('/', quizController_1.createQuiz);
router.get('/:id', quizController_1.getQuiz);
router.post('/:quizId/questions/:questionId/answer', quizController_1.submitAnswer);
router.post('/:quizId/results', quizController_1.getResults);
exports.default = router;

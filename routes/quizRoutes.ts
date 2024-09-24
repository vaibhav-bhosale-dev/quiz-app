import { Router } from 'express';
import { createQuiz, getQuiz, submitAnswer, getResults } from './../controllers/quizController';

const router = Router();

router.post('/', createQuiz);
router.get('/:id', getQuiz);
router.post('/:quizId/questions/:questionId/answer', submitAnswer);
router.post('/:quizId/results', getResults);

export default router;

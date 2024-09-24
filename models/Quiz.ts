import { v4 as uuidv4 } from 'uuid';

interface Question {
  id: string;
  text: string;
  options: string[];
  correct_option: number;
}

interface QuizData {
  id: string;
  title: string;
  questions: Question[];
}

const quizzes: QuizData[] = [];

export class Quiz {
  id: string;
  title: string;
  questions: Question[];

  constructor(title: string, questions: Question[]) {
    this.id = uuidv4();
    this.title = title;
    this.questions = questions;
  }

  static createQuiz(title: string, questions: Question[]): QuizData {
    const quiz = new Quiz(title, questions);
    quizzes.push(quiz);
    return quiz;
  }

  static getQuizById(id: string): QuizData | undefined {
    return quizzes.find(quiz => quiz.id === id);
  }
}

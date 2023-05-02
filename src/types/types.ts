export type questionData = {
  id: 672;
  question: string;
  description: null;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: string;
    answer_f: null;
  };
  multiple_correct_answers: boolean;
  correct_answers: {
    answer_a_correct: string;
    answer_b_correct: string;
    answer_c_correct: string;
    answer_d_correct: string;
    answer_e_correct: string;
    answer_f_correct: string;
  };
  correct_answer: string;
  explanation: string;
  tip: null;
  tags: [
    {
      name: string;
    },
  ];
  category: string;
  difficulty: string;
};

export type userAnswer = {
  questionNumber: number;
  userAnswerIndex: number;
  isAnswerCorrect: boolean;
};

export type QuizContextValue = {
  quizCategory?: string;
};

export type questionData = {
    id: 672,
    question: string,
    description: null,
    answers: {
      answer_a: string,
      answer_b: string,
      answer_c: string,
      answer_d: string,
      answer_e: string,
      answer_f: null,
    },
    multiple_correct_answers: boolean,
    correct_answers: {
      answer_a_correct: boolean,
      answer_b_correct: boolean,
      answer_c_correct: boolean,
      answer_d_correct: boolean,
      answer_e_correct: boolean,
      answer_f_correct: boolean,
    },
    correct_answer: string,
    explanation: string,
    tip: null,
    tags: [
      {
        name: string,
      },
    ],
    category: string,
    difficulty: string,
  }

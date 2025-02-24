import { FC } from 'react';
import { Button, Box } from '../../components';
import { Answers } from '../Answers';
import { questionData } from '../../types';

type QuizQuestionProps = {
  quizQuestions: questionData[];
  questionIndex: number;
  setUserAnswerIndex: React.Dispatch<React.SetStateAction<number>>;
  nextButtonHandler: () => void;
};

export const QuizQuestion: FC<QuizQuestionProps> = ({
  quizQuestions,
  questionIndex,
  setUserAnswerIndex,
  nextButtonHandler,
}) => {
  return (
    <Box>
      <h2>{`${questionIndex + 1}. ${quizQuestions[questionIndex]?.question}`}</h2>
      <Answers quizQuestions={quizQuestions} questionIndex={questionIndex} setUserAnswerIndex={setUserAnswerIndex} />
      <Button onClick={nextButtonHandler} className="Quiz__nextButton">
        Next
      </Button>
    </Box>
  );
};

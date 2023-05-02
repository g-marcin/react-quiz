import { FC } from 'react';
import { questionData } from '../../types';
import { Box } from '../../components';

type AnswerProps = {
  quizQuestions: questionData[];
  questionIndex: number;
  setUserAnswerIndex: React.SetStateAction<any>;
};

export const Answers: FC<AnswerProps> = ({ quizQuestions, questionIndex, setUserAnswerIndex }) => {
  return (
    <Box>
      {Object.values(quizQuestions[questionIndex]['answers']).map((answer, index) => {
        if (!answer) {
          return null;
        }
        return (
          <div style={{ listStyleType: 'none' }} key={index}>
            <input
              type="radio"
              name="answer"
              value={index}
              onChange={(event) => {
                setUserAnswerIndex(Number(event.target.value));
              }}
            />
            {answer}
          </div>
        );
      })}
    </Box>
  );
};

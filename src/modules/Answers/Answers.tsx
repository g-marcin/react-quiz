import { FC } from 'react';
import { questionData } from '../../types';

type AnswerProps = {
  quizQuestions: questionData[];
  questionIndex: number;
  setUserAnswerIndex: React.SetStateAction<any>;
};

export const Answers: FC<AnswerProps> = ({ quizQuestions, questionIndex, setUserAnswerIndex }) => {
  return (
    <>
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
    </>
  );
};

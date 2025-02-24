import { FC, ReactElement, useId } from 'react';
import { userAnswer } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ResultProps = {
  children?: ReactElement | ReactElement[];
  userAnswer: userAnswer;
  index: number;
};

export const Result: FC<ResultProps> = ({ userAnswer, index }) => {
  const uniqueKey = useId();
  return (
    <>
      <span>
        <p key={uniqueKey}>
          {' '}
          {` Answer ${index + 1} is ${userAnswer.isAnswerCorrect ? 'correct' : 'incorrect'}`}{' '}
          <FontAwesomeIcon icon={userAnswer.isAnswerCorrect ? 'check' : 'x'} />
        </p>
      </span>
    </>
  );
};

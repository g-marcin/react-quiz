import { FC, ReactElement } from 'react';
import { userAnswer } from '../../types';
import { Box } from '../../components';
import { Result } from './Result';

type ResultsProps = {
  children?: ReactElement | ReactElement[];
  userAnswers: userAnswer[];
};

export const Results: FC<ResultsProps> = ({ userAnswers }) => {
  return (
    <>
      <Box>
        <h2>Results:</h2>
        <div>
          {userAnswers.map((userAnswer, index) => {
            return <Result userAnswer={userAnswer} index={index} />;
          })}
        </div>
      </Box>
    </>
  );
};

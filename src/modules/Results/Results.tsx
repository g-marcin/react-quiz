import { FC, ReactElement } from 'react';
import { Box, Button, Container } from '../../components';
import { userAnswer } from '../../types';
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
        <Container className="column">
          {userAnswers.map((userAnswer, index) => {
            return <Result userAnswer={userAnswer} index={index} />;
          })}
        </Container>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          className='Quiz__nextButton'
        >
          Reset
        </Button>
      </Box>
    </>
  );
};

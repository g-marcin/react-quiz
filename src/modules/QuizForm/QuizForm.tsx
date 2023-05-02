import { FC } from 'react';
import { Box, Container, Button } from '../../components';

type QuizFormProps = {
  setIsQuizRunning: React.SetStateAction<boolean | any>;
};

export const QuizForm: FC<QuizFormProps> = ({ setIsQuizRunning }) => {
  return (
    <>
      <Box className="">
        <Container className="">
          <form action=".">
            <select name="" id="">
              <option value="linux">linux</option>
              <option value="bash">BASH</option>
              <option value="devops">devops</option>
            </select>
          </form>
        </Container>
        <Button
          onClick={() => {
            setIsQuizRunning(true);
          }}
        >
          Start
        </Button>
      </Box>
    </>
  );
};

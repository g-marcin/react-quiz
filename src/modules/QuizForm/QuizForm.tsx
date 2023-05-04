import { FC, useContext } from 'react';
import { Box, Container, Button } from '../../components';
import { QuizContext } from '../QuizContext';
import { useForm } from 'react-hook-form';

type QuizFormProps = {
  setIsQuizRunning: React.SetStateAction<boolean | any>;
};

export const QuizForm: FC<QuizFormProps> = ({ setIsQuizRunning }) => {
  const quizContextObject = useContext(QuizContext);
  const setQuizParameters = quizContextObject?.setQuizParameters || null;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    if (setQuizParameters) {
      setQuizParameters({ quizCategory: data.quizCategory });
    }
    setIsQuizRunning(true);
  };

  return (
    <>
      <Box>
        <Container className="column">
          <h2>Please choose quiz category...</h2>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <select {...register('quizCategory')}>
              <option value="linux">linux</option>
              <option value="devops">devops</option>
              <option value="docker">docker</option>
              <option value="sql">sql</option>
              <option value="cms">cms</option>
              <option value="code">code</option>
            </select>
            <Button className="controlButton">
              <input style={{ display: 'none' }} type="submit" value="submit" />
              Start
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};

import { AxiosResponse } from 'axios';
import { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { Results } from '..';
import { apiKey } from '../../../api/';
import { httpClient } from '../../common';
import { Spinner } from '../../components';
import { Box } from '../../components/Box';
import { questionData } from '../../types';
import { QuizContext } from '../QuizContext';
import { QuizQuestion } from '../QuizQuestion';

type QuizProps = {
  children?: ReactElement | ReactElement[];
};

export const Quiz: FC<QuizProps> = ({ children }) => {
  const category = useContext(QuizContext)?.quizParameters.quizCategory;
  const limit = 10;
  const [quizQuestions, setQuizQuestions] = useState<questionData[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswerIndex, setUserAnswerIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    { questionNumber: number; userAnswerIndex: number; isAnswerCorrect: boolean }[]
  >([]);
  const isQuizFinished = questionIndex === limit;
  const questionExists = !!quizQuestions[questionIndex];
  useEffect(() => {
    httpClient
      .get(`/v1/questions?apiKey=${apiKey}&category=${category}&limit=${limit}`)
      .then((response: AxiosResponse) => {
        setQuizQuestions(response.data);
      });
  }, []);

  return (
    <>
      {children}
      {!isQuizFinished && (
        <Box className="Quiz__wrapper">
          {questionExists ? (
            <QuizQuestion
              quizQuestions={quizQuestions}
              questionIndex={questionIndex}
              setUserAnswerIndex={setUserAnswerIndex}
              nextButtonHandler={nextButtonHandler}
            />
          ) : (
            <Spinner />
          )}
        </Box>
      )}
      {isQuizFinished && <Results userAnswers={userAnswers} />}
    </>
  );

  function nextButtonHandler() {
    const currentUserAnswers = [...userAnswers];
    const isAnswerCorrect = Object.values(quizQuestions[questionIndex].correct_answers)[userAnswerIndex] === 'true';
    currentUserAnswers.push({
      questionNumber: questionIndex + 1,
      userAnswerIndex: userAnswerIndex,
      isAnswerCorrect: isAnswerCorrect,
    });
    setUserAnswers(currentUserAnswers);
    setQuestionIndex(questionIndex + 1);
  }
};

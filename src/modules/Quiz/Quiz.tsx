import { FC, ReactElement, useEffect, useState } from 'react';
import { httpClient } from '../../common';
import { AxiosResponse } from 'axios';
import { questionData } from '../../types';
import { apiKey } from '../../../api/';
import { Answers } from '../Answers';

type QuizProps = {
  children: ReactElement | ReactElement[] | undefined;
};

export const Quiz: FC<QuizProps> = ({ children }) => {
  const category = 'linux';
  const limit = 10;
  const [quizQuestions, setQuizQuestions] = useState<questionData[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswerIndex, setUserAnswerIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    { questionNumber: number; userAnswerIndex: number; isAnswerCorrect: boolean }[]
  >([]);
  const isQuizFinished = questionIndex===limit
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
        <div className='Quiz__wrapper' >
          <h2>{`${questionIndex + 1}. ${quizQuestions[questionIndex]?.question}`}</h2>
          {questionExists ? (
            <Answers
              quizQuestions={quizQuestions}
              questionIndex={questionIndex}
              setUserAnswerIndex={setUserAnswerIndex}
            />
          ) : null}
          <button
            onClick={nextButtonHandler}
          >
            Next
          </button>
        </div>
      )}

      {isQuizFinished && (
        <div>
          <h2>Results:</h2>
          <div>
            {userAnswers.map((userAnswer, index) => {
              return (
                <p key={index}> {` Answer ${index + 1} is ${userAnswer.isAnswerCorrect ? 'correct' : 'incorrect'}`}</p>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
  function nextButtonHandler(){
      const currentUserAnswers = [...userAnswers];
      const isAnswerCorrect =
        Object.values(quizQuestions[questionIndex].correct_answers)[userAnswerIndex] === 'true';
      currentUserAnswers.push({
        questionNumber: questionIndex + 1,
        userAnswerIndex: userAnswerIndex,
        isAnswerCorrect: isAnswerCorrect,
      });
      setUserAnswers(currentUserAnswers);
      setQuestionIndex(questionIndex + 1);
    }
};

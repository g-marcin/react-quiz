import { FC, ReactElement, useEffect, useState } from 'react';
import { httpClient } from '../../common';
import { AxiosResponse } from 'axios';
import { questionData } from '../../types';
import { apiKey } from '../../../api/';

type AnswerProps = {
  quizQuestions: questionData[];
  questionIndex: number;
  setUserAnswerIndex: React.SetStateAction<any>;
};

export const Answers: FC<AnswerProps> = ({ quizQuestions, questionIndex, setUserAnswerIndex }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', border: '1px solid black' }}>
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
    </div>
  );
};

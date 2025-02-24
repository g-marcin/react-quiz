import { FC, ReactElement, createContext, useState } from 'react';
import { QuizContextValue } from '../../types';

export const QuizContext = createContext<QuizContextValue | null>(null);

type QuizContextProviderProps = {
  children: ReactElement | ReactElement[] | boolean | any;
  value?: any;
};

export const QuizContextProvider: FC<QuizContextProviderProps> = ({ children }) => {
  const [quizParameters, setQuizParameters] = useState({ quizCategory: 'devops' });
  return (
    <QuizContext.Provider value={{ quizParameters: quizParameters, setQuizParameters: setQuizParameters }}>
      {children}
    </QuizContext.Provider>
  );
};

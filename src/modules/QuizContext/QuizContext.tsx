import { ReactElement, createContext } from 'react';
import { QuizContextValue } from '../../types';
import { FC } from 'react';

export const QuizContext = createContext<QuizContextValue | null>({ quizCategory: 'linux' });

type QuizContextProviderProps = {
  children: ReactElement | ReactElement[] | boolean | any;
  value?: QuizContextValue;
};

export const QuizContextProvider: FC<QuizContextProviderProps> = ({ children, value }) => {
  return <QuizContext.Provider value={{ quizCategory: 'devops' }}>{children}</QuizContext.Provider>;
};

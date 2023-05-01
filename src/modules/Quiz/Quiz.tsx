import React, { FC, ReactElement } from "react";

type QuizProps = {
  children: ReactElement | ReactElement[];
};

export const Quiz: FC<QuizProps> = ({ children }) => {
  return <>{children}</>;
};

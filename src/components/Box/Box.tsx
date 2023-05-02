import { FC, ReactNode } from 'react';

import style from './Box.module.css';

type BoxProps = {
  children: ReactNode | ReactNode[];
};
export const Box: FC<BoxProps> = ({ children }) => {
  return <div className={style.box}>{children}</div>;
};

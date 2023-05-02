import { FC, ReactNode } from 'react';
import style from './Box.module.css';

type BoxProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};
export const Box: FC<BoxProps> = ({ children, className }) => {
  return <div className={`${style.box} ${className}`}>{children}</div>;
};

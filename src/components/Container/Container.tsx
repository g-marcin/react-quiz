import { FC, ReactNode } from 'react';
import style from './Container.module.css';

type ContainerProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};
export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

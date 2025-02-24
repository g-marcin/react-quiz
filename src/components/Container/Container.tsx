import { FC, ReactNode } from 'react';
import style from './Container.module.css';

type ContainerProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: any;
};
export const Container: FC<ContainerProps> = ({ children, className, ...delegated }) => {
  return (
    <div className={`${style.container} ${className}`} {...delegated}>
      {children}
    </div>
  );
};

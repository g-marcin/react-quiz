import { FC, MouseEventHandler, ReactNode } from 'react';
import style from './Button.module.css';

type ButtonProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

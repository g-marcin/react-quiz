import { FC } from 'react';
import style from './Spiner.module.css';
import { Container } from '..';

type SpinnerProps = {
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <Container className="Quiz__spinner">
      <div className={`${style.ldsSpinner} ${className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

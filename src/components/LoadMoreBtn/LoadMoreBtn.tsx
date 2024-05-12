import css from "./LoadMoreBtn.module.css";
import { FC } from 'react';

interface LoadMoreBtnProps {
    onClick: () => void;
  }

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {

  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
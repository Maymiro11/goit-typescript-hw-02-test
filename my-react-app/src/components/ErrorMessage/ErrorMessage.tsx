import css from "./ErrorMessage.module.css";
import { FC } from 'react';

const ErrorMessage: FC = () => {
  return (
    <main>
      <p className={css.text}>Oops! It is like something went wrong. Please, reload your page or try
        again later</p>;
    </main>
  );
}

export default ErrorMessage;
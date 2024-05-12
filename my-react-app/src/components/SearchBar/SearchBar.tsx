import css from './SearchBar.module.css';
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FC, FormEvent } from 'react';

interface SearchBarProps {
    onSearch: (value: string) => void;
  }

const SearchForm: FC<SearchBarProps> = ({ onSearch }) => {
    const inputId = useId();
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const valueForSearch: string = (
          form.elements.namedItem('search') as HTMLInputElement
        ).value.trim();
        !valueForSearch
          ? toast.error('Search request can not be empty')
          : onSearch(valueForSearch);
      };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          id={inputId}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          aria-label="Searhing imput"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            width: 600,
            height: 75,
            paddingLeft: 25,
            fontSize: 18,
          },
        }}
      />
    </header>
  );
}

export default SearchForm;
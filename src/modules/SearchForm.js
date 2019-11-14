import React from 'react';
import styles from './SearchForm.module.css';

function SearchForm() {
  return (
    <form className={styles.searchForm}>
      <input type="text" placeholder="type in title or author"></input>
      <button>search</button>
      <button>more options</button>
    </form>
  );
}

export default SearchForm;

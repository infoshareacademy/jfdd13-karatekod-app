import React from 'react';
import styles from './SearchChBox.module.css';

function SearchChBox() {
  return (
    <select type="select"  className={styles.searchChBox}>
      <option>any</option>
      <option>Drama</option>
      <option>Comedy</option>
      <option>Horror</option>
      <option>Thriller</option>
      <option>Poetry</option>
    </select>
  );
}

export default SearchChBox;
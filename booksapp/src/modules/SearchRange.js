import React from 'react';
import styles from './SearchRange.module.css';

function SearchRange() {
  return (
    <form>
    <input type="range" value="1" step="5" min="1" max="100" name="points" className={styles.searchRange}>
      
    </input></form>
  );
}

export default SearchRange;
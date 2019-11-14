import React from 'react';
import styles from './SearchRange.module.css';

function SearchRange() {
  return (
    <input type="range" value="1" step="5" min="100" max="100" className={styles.searchRange}>
      
    </input>
  );
}

export default SearchRange;
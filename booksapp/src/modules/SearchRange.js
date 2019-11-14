import React from 'react';
import styles from './Component.module.css';

function ComponentX() {
  return (
    <div className={styles.component}>
      <p>To jest component X</p>
      <img src="http://via.placeholder.com/200x400"></img>
    </div>
  );
}

export default ComponentX;
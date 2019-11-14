import React from 'react';
import styles from './Main.module.css';
import dashboard1 from './dashboard1.png'
import dashboard2 from './dashboard2.png'

export function Main(){
    return (
        <>
        <h1>BookSwapp</h1>
        <h2>Exchange your favorite books now!</h2>
        <h3>Your activity:</h3>
        <img className={styles.dashboard1} src={dashboard1}/>
        <img className={styles.dashboard2} src={dashboard2}/>

        </>

    )
}

export default Main
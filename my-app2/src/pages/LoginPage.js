import React from 'react';
import styles from '../styles/Login.module.css'


const LoginPage = () => {
    return (
        <div className={styles.login}>
            <div className={styles.container}>
            <h2>Log in to your account</h2>
            <form className={styles.form}>
                <label htmlFor="" className={styles.label}> <input className={styles.input} type="text" placeholder="email"/></label>
                <label htmlFor="" className={styles.label}> <input className={styles.input} type="password" placeholder="password"/></label>
                <button className={styles.button}>LOG IN</button>
            </form>
            </div>

        </div>
    )
}

export default LoginPage
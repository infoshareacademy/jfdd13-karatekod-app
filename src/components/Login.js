import React, { Component } from 'react';
import styles from '../styles/Login.module.css';
import {NavLink} from 'react-router-dom'

const Login = props => {
    console.log(props);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <h2>Log in to your account</h2>
                <form className={styles.form}>
                    <label htmlFor="" className={styles.label}> <input className={styles.input} type="text" placeholder="email"/></label>
                    <label htmlFor="" className={styles.label}> <input className={styles.input} type="password" placeholder="password"/></label>
                    <button className={styles.button}>LOG IN</button>
                    <NavLink to="/register">
                        <button className={styles.button}>New user? REGISTER</button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login

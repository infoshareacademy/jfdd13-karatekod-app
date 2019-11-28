import React, { Component } from 'react';
import styles from '../styles/Login.module.css';
import {NavLink} from 'react-router-dom'

const Register = props => {
    console.log(props);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <h2>Register</h2>
                <form className={styles.form}>
                    <label htmlFor="" className={styles.label}> <input className={styles.input} type="email" placeholder="email"/></label>
                    <label htmlFor="" className={styles.label}> <input className={styles.input} type="password" placeholder="password"/></label>
                    <button className={styles.button}>REGISTER</button>
                    <NavLink to="/login">
                        <button className={styles.button}>Existing user? LOG IN</button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Register
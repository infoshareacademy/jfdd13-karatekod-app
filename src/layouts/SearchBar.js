import React from 'react';
import styles from "../styles/Search.module.css";
import logo from '../images/logo.png';


const SearchBar = () => {
    return (
        <div className={styles.search}>
                <img src={logo} className={styles.logo}/>
                <form className={styles.form}>
                    <input type="text" placeholder="Search for books" className={styles.input}></input>
                    <button className={styles.button}>SEARCH</button>
                </form>
        </div>
    )
}

export default SearchBar
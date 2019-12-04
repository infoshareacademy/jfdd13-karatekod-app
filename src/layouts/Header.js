import React from 'react';
import styles from '../styles/Header.module.css';
import { Route, Switch } from 'react-router-dom'
import photo4 from '../images/photo4.jpg';

const Header = () => {
    return (
        <div className={styles.header}>         
            <Switch>
                <Route path="/"  render={() =>( <img className={styles.headerImg} src={photo4} alt="header" />)} />
            </Switch>
     </div>
    )
}

export default Header
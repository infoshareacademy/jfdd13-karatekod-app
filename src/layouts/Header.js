import React from 'react';
import styles from '../styles/Header.module.css';
import { Route, Switch } from 'react-router-dom'
import photo4 from '../images/photo4.jpg';
import logoWhite from '../images/logoWhite.png'
import logopic from '../images/logopic.png'


const Header = () => {
    return (
        <div className={styles.header}>         
            <Switch>
                <Route path="/"  
                render={() =>(
                    <div>
                        <img className={styles.headerImg} src={photo4} alt="header"/>
                        <img className={styles.logoBook} src={logopic}/>
                        <img className={styles.logoText} src={logoWhite}/>
                    </div>
              )} />
            </Switch>
     </div>
    )
}

export default Header
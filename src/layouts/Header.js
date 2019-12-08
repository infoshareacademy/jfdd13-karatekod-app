import React from 'react';
import styles from '../styles/Header.module.css';
import { Route, Switch } from 'react-router-dom'
import photo4 from '../images/photo4.jpg';
import logoWhite from '../images/logoWhite.png'


const Header = () => {
    return (
        <div className={styles.header}>         
            <Switch>
                <Route path="/"  
                render={() =>(
                    
                <div>
                <img className={styles.headerImg} src={photo4} alt="header"/>
                <img style={{
                    position: 'absolute',
                    width: '320px',
                    height: '50px',
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    marginLeft: '100px',
                    marginTop: '40px'
                }} src={logoWhite}/>
                    </div>
                               

                                
                
                
                )} />
            </Switch>
     </div>
    )
}

export default Header
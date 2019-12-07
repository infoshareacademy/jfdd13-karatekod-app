import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import styles from "../styles/Navigation.module.css";
import menu1 from '../images/menu1.png';
import firebase from 'firebase'

const list = [
    {name: 'my profile', path: '/login'},
    {name: 'dashboard', path: '/statistics'},
    {name: 'add book', path: '/addBooks'},
    {name: 'search' , path: '/search', exact: true},
]

const Navigation = () => {
    const [open, setOpen] = useState(false);

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ?
            item.exact : false} activeClassName={styles.active}>{item.name}</NavLink>
        </li>
    ))


    return (
        <nav className={styles.mainNav}>
            <img src={menu1} className={styles.menuTitle} onClick={() => setOpen(!open)} />
            <ul className={open && styles.active}>
                {menu}
                <li className={styles.active} key="sign out"><NavLink onClick={()=>{firebase.auth().signOut()}} to="/">Sign Out</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation
import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "../styles/Navigation.module.css";



const list = [

    {name: 'your profile', path: '/admin'},


    {name: 'dashboard', path: '/statistics'},

    {name: 'add book', path: '/addBooks'},
    {name: 'search' , path: '/search', exact: true}   
]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ?
            item.exact : false} activeClassName={styles.active}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className={styles.mainNav}>
            <ul>
                {menu}
            </ul>
       
        </nav>
    )
}

export default Navigation
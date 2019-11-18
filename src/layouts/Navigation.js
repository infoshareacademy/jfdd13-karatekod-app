import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "../styles/Navigation.module.css";



const list = [
    {name: 'start', path: '/', exact: true},
    {name: 'your profile', path: '/admin'},
    {name: 'book list', path: '/books'},
    {name: 'contact', path: '/contact'},
    
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
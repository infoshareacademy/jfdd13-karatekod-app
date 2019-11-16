import React from 'react';
import styles from "../styles/Navigation.module.css";
import {NavLink} from 'react-router-dom'



const list = [
    {name: 'start', path: '/'},
    {name: 'products', path: '/products'},
    {name: 'contact', path: '/contact'},
    {name: 'admin panel', path: '/admin'},

]
const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className={styles.div}>
            <ul>
                {menu}
            </ul>
       
        </nav>
    )
}

export default Navigation
import React, {Component} from 'react';
import  styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom' 



export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div>
          <Link to ="/"><img src="#" alt="MENU"></img></Link>
        </div>
        <div>Logo And name</div>
        <ul className={styles.header__nav}>
          <NavLink to = "/about" className={styles.header__li} activeClassName={styles.header__li_active}>
            <li>About</li>
          </NavLink>
          <NavLink to = "/login" className={styles.header__li} activeClassName={styles.header__li_active}>
            <li>Login</li>
          </NavLink>
          <NavLink to = "/register" className={styles.header__li} activeClassName={styles.header__li_active}>
            <li>Register</li>
          </NavLink>

        </ul>
        
      </header>
    )
  }
}





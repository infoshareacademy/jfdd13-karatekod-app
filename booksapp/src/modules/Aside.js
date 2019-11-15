import React from 'react';
import styles from '../modules/Aside.module.css';
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
    <aside>
      <div className={styles.asideMenu}>
        <p>Side bar Menu</p>
      </div>
      <ul>
        <div>
          <NavLink activeClassName={styles.activeLink} className={styles.noActiveLink} to = "/x" exact>
            <li>Menu1</li>
          </NavLink>
        </div>
        <div className={styles.asideButton}>
          <NavLink to = "/y">
            <li>Menu2</li>
          </NavLink>
        </div>
        <div className={styles.asideButton}>
          <NavLink to = "/z">
            <li>Menu3</li>
          </NavLink>
        </div>
        <div className={styles.asideButton}>
          <NavLink to = "/x">
            <li>Menu4</li>
          </NavLink>
        </div>
        <div className={styles.asideButton}>
          <NavLink to = "/y">
            <li>Menu5</li>
          </NavLink>
        </div>
        
      </ul>
      <br></br>
      
    </aside>
  );
}

export default Aside;
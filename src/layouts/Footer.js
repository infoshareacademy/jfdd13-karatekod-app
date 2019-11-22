import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerAbout}>
                <span className={styles.bottom}>© 2019 BookSwapp</span>
                <a href="http://www.karatekod.jfdd13.is-academy.pl/">BookSwapp page</a>
                <a href="https://www.facebook.com/BookSwapp-110938070331360/?modal=admin_todo_tour">facebook</a>
                <a href="https://www.instagram.com/book___swapp/?hl=pl">instagram</a>
            </div>        
        </div>
        )
}

export default Footer
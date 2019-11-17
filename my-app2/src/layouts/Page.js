import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BooksPage from '../pages/BooksPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import styles from '../styles/Page.module.css';

const Page = () => {
    return (

        <div className={styles.page}>
            <Switch>
                <Route path="/" exact 
                render={() => (
                    <HomePage /> 
                )} />
                 <Route path="/contact"  
                render={() => (
                    <ContactPage />

                )} />
                 <Route path="/admin"  
                render={() => (
                    <AdminPage/>
                )} />
                 <Route path="/books"  
                render={() => (
                    <BooksPage/>

                )} />
                   <Route path="/login"  
                render={() => (
                    <LoginPage/>

                )} />
                 <Route  
                render={() => (
                   <ErrorPage/>

                )} />
             </Switch>
        </div>
    )
}

export default Page

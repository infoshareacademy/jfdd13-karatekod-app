import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BooksListPage from '../pages/BooksListPage';
import Statistics from '../pages/Statistics';
import AdminPage from '../pages/AdminPage';
import Login from '../components/Login';
import ErrorPage from '../pages/ErrorPage';
import BookPage from '../pages/BookPage';
import AddBooks from '../pages/AddBooks'
import styles from '../styles/Page.module.css';
import Search from '../pages/Search'

const Page = () => {
    return (
        <div className={styles.page}>
            <Switch>
                <Route path="/" exact render={() => (<Search/> )} />
                <Route path="/statistics"  render={() => (<Statistics />)} />
                <Route path="/admin"  render={() => (<AdminPage/>)} />
                <Route path="/books" render={() => (<BooksListPage/>)} />
                <Route path="/book/:id"  component={BookPage} />
                <Route path='/addBooks'  render={() => (<AddBooks/>)} />
                <Route path="/search" render={() => (<Search/> )} />
                <Route path= "/login" exact render={() => (<Login/> )} />
                <Route render={() => (<ErrorPage/>)} />
            </Switch>
        </div>
    )
}

export default Page

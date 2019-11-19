import React from 'react';
import Book from '../components/Book.js';
import { Link } from 'react-router-dom';
import uuid from "uuid";
import styles from "../styles/Books.module.css";

export let books = (() => {
    let bookslist = localStorage.getItem("bookslist");
    if (!bookslist) {
        bookslist = [
            {
                id: uuid.v4(),
                title: "Metro 2033",
                autor: "Dmitry Glukhovsky",
                type: "fantasy",
                imageUrl: "http://placekitten.com/140/190",
                condition: 5
            },
            {
                id: uuid.v4(),
                title: "Harry Potter",
                autor: "J. K. Rowling",
                type: "fantasy",
                imageUrl: "http://placekitten.com/140/190",
                condition: 5
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 4
            },
            {
                id: uuid.v4(),
                title: "Zielona Mila",
                autor: "Stephen King",
                type: "horror",
                imageUrl: "http://placekitten.com/140/190",
                condition: 7
            },
            {
                id: uuid.v4(),
                title: "Wstrząs",
                autor: "Robin Cook",
                type: "thriller",
                imageUrl: "http://placekitten.com/140/190",
                condition: 10
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 1
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 8
            },
            {
                id: uuid.v4(),
                title: "Zielona Mila",
                autor: "Stephen King",
                type: "horror",
                imageUrl: "http://placekitten.com/140/190",
                condition: 4
            },
            {
                id: uuid.v4(),
                title: "Wstrząs",
                autor: "Robin Cook",
                type: "thriller",
                imageUrl: "http://placekitten.com/140/190",
                condition: 7
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 6
            }
        ];
        localStorage.setItem('bookslist', JSON.stringify(bookslist));
    }
    return JSON.parse(localStorage.getItem("bookslist"))


})()




const BooksListPage = () => {
    const booksList = JSON.parse(localStorage.getItem("bookslist")).map(book => (

        <Link to={`/book/${book.id}`}>
        <div className={styles.singleBook}>
        <img src={book.imageUrl}/>
        <Book key={book.id} {...book} src={book.imageUrl}  />
        </div>
        
    </Link>
    ))


    return (
        <div className={styles.books}>
            <h2>List of books</h2>
            <div className={styles.list}>{booksList}</div>
        </div>
    );
}


export let booksList = JSON.parse(localStorage.getItem("bookslist"))

export default BooksListPage



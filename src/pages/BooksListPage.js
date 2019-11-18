import React from 'react';
import Book from '../components/Book.js';
import {Link} from 'react-router-dom';
import uuid from "uuid";
import styles from "../styles/Books.module.css";



const books = [
    {
        id: uuid.v4(),
        title: "Metro 2033",
        autor: "Dmitry Glukhovsky",
        type: "fantasy",
        
    },
    {
        id: uuid.v4(),
        title: "Harry Potter",
        autor: "J. K. Rowling",
        type: "fantasy",
    },
    {
        id: uuid.v4(),
        title: "Dziady cz. II",
        autor: "Adam Mickiewicz",
        type: "poetry",
    },
    {
        id: uuid.v4(),
        title: "Zielona Mila",
        autor: "Stephen King",
        type: "horror",
    },
    {
        id: uuid.v4(),
        title: "Wstrząs",
        autor: "Robin Cook",
        type: "thriller",
    },
    {
        id: uuid.v4(),
        title: "Dziady cz. II",
        autor: "Adam Mickiewicz",
        type: "poetry",
    },
    {
        id: uuid.v4(),
        title: "Dziady cz. II",
        autor: "Adam Mickiewicz",
        type: "poetry",
    },
    {
        id: uuid.v4(),
        title: "Zielona Mila",
        autor: "Stephen King",
        type: "horror",
    },
    {
        id: uuid.v4(),
        title: "Wstrząs",
        autor: "Robin Cook",
        type: "thriller",
    },
    {
        id: uuid.v4(),
        title: "Dziady cz. II",
        autor: "Adam Mickiewicz",
        type: "poetry",

    }
]

const BooksListPage = () => {
    const booksList = books.map(book => (
        <Link to={`/book/${book.id}`}><Book key={book.id} {...book} /></Link>
      ))
  
  
      return (
          <div className={styles.books}>
              <h2>List of books</h2>
              <div className={styles.list}>{booksList}</div>
          </div>
      );
  }
  
export default BooksListPage
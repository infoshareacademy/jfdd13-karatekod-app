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
            },
            {   
                id: uuid.v4(),
                title: 'Sonety Krymskie',
                autor: 'Mickiewicz Adam',                
                type: 'drama',
                Urlmage: 'https://m.media-amazon.com/images/I/71POgs4xodL._AC_UY218_ML3_.jpg',
                condition: 4,
            },        
            {   
                id: uuid(),
                autor: 'Kafka Franz',                
                type: 'drama',
                condition: 4,
                imageUrl: 'https://m.media-amazon.com/images/I/71nOuOkfieL._AC_UY218_ML3_.jpg',
                title: 'Trial'
            },        
            {   id: uuid(),
                autor: 'Dick Philip',
                type: 'sci-fi',
                condition: 3,
                imageUrl: 'https://m.media-amazon.com/images/I/818R7hS2I1L._AC_UY218_ML3_.jpg',
                title: 'Valis'
            },        
            {   id: uuid(),
                autor: 'Tokarczuk Olga',
                
                type: 'drama',
                condition: 5,
                imageUrl: 'https://m.media-amazon.com/images/I/71vT+W7LigL._AC_UY218_ML3_.jpg',
                title: 'Before-age and other times'
            },        
            {   id: uuid(),
                autor: 'Woolf Virginia',
                
                type: 'drama',
                condition: 5,
                imageUrl: 'https://m.media-amazon.com/images/I/71u0+xPr12L._AC_UY218_ML3_.jpg',
                title: 'Orlando'
            },        
            {   id: uuid(),
                autor: 'Nalkowska Zofia',
                
                type: 'drama',
                condition: 3,
                imageUrl: 'https://m.media-amazon.com/images/I/8152BeGLkTL._AC_UY218_ML3_.jpg',
                title: 'Boundary'
            },        
            {   id: uuid(),
                autor: 'Eco Umberto',
                
                type: 'drama',
                condition: 1,
                imageUrl: 'https://m.media-amazon.com/images/I/91H9StSOJGL._AC_UY218_ML3_.jpg',
                title: 'Name of Rose'  
            },      
            {   
               
                autor: 'King Stephen',
                
                type: 'horror',
                condition: 5,
                imageUrl: 'https://m.media-amazon.com/images/I/91DkmcRi4sL._AC_UY218_ML3_.jpg',
                title: 'Kingdom'
            },
            {
                id: uuid(),
                autor: 'Achmatova Anna',
                
                type: 'poetry',
                condition: 3,
                imageUrl: 'https://m.media-amazon.com/images/I/91ewNSl222L._AC_UY218_ML3_.jpg',
                title: 'Poetry-Collection'
                
            },
        
            
        
            {   id: uuid(),
                autor: 'Kristeva Julia',
                
                type: 'science',
                condition: 2,
                imageUrl: 'https://m.media-amazon.com/images/I/91lMICvbU3L._AC_UY218_ML3_.jpg',
                title: 'Intertextuality'
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


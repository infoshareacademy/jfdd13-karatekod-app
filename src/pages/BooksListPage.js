import React, {useState, useEffect} from 'react';
import Book from '../components/Book.js';
import { Link } from 'react-router-dom';
import uuid from "uuid";
import styles from "../styles/Books.module.css";
import AddToFavorites from '../components/AddToFavorites'
import SomeButtons from '../components/SomeButtons.js';
import '../styles/SingleBook.css'
import { tsPropertySignature } from '@babel/types';
import star from '../images/star.png';
import { watchBooks, stopBooks } from '../services/BookService'


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
                condition: 5,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
                  
            },
            {
                id: uuid.v4(),
                title: "Harry Potter",
                autor: "J. K. Rowling",
                type: "fantasy",
                imageUrl: "http://placekitten.com/140/190",
                condition: 5,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 4,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Zielona Mila",
                autor: "Stephen King",
                type: "horror",
                imageUrl: "http://placekitten.com/140/190",
                condition: 3,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Wstrząs",
                autor: "Robin Cook",
                type: "thriller",
                imageUrl: "http://placekitten.com/140/190",
                condition: 1,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 1,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 3,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Zielona Mila",
                autor: "Stephen King",
                type: "horror",
                imageUrl: "http://placekitten.com/140/190",
                condition: 3,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Wstrząs",
                autor: "Robin Cook",
                type: "thriller",
                imageUrl: "http://placekitten.com/140/190",
                condition: 1,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                title: "Dziady cz. II",
                autor: "Adam Mickiewicz",
                type: "poetry",
                imageUrl: "http://placekitten.com/140/190",
                condition: 2,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {   
                id: uuid.v4(),
                title: 'Sonety Krymskie',
                autor: 'Mickiewicz Adam',                
                type: 'drama',
                imageUrl: 'https://m.media-amazon.com/images/I/71POgs4xodL._AC_UY218_ML3_.jpg',
                condition: 4,
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },        
            {   
                id: uuid.v4(),
                autor: 'Kafka Franz',                
                type: 'drama',
                condition: 4,
                imageUrl: 'https://m.media-amazon.com/images/I/71nOuOkfieL._AC_UY218_ML3_.jpg',
                title: 'Trial',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },        
            {   id: uuid.v4(),
                autor: 'Dick Philip',
                type: 'sci-fi',
                condition: 3,
                imageUrl: 'https://m.media-amazon.com/images/I/818R7hS2I1L._AC_UY218_ML3_.jpg',
                title: 'Valis',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },        
            {   id: uuid.v4(),
                autor: 'Tokarczuk Olga',
                type: 'drama',
                condition: 5,
                imageUrl: 'https://m.media-amazon.com/images/I/71vT+W7LigL._AC_UY218_ML3_.jpg',
                title: 'Before-age and other times',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },        
            {   id: uuid.v4(),
                autor: 'Woolf Virginia',
                type: 'drama',
                condition: 5,
                imageUrl: 'https://m.media-amazon.com/images/I/71u0+xPr12L._AC_UY218_ML3_.jpg',
                title: 'Orlando',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },        
            {   id: uuid.v4(),
                autor: 'Nalkowska Zofia',
                type: 'drama',
                condition: 3,
                imageUrl: 'https://m.media-amazon.com/images/I/8152BeGLkTL._AC_UY218_ML3_.jpg',
                title: 'Boundary',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },        
            {   id: uuid.v4(),
                autor: 'Eco Umberto',
                type: 'drama',
                condition: 1,
                imageUrl: 'https://m.media-amazon.com/images/I/91H9StSOJGL._AC_UY218_ML3_.jpg',
                title: 'Name of Rose',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },      
            {   
                id: uuid.v4(),
                autor: 'King Stephen',
                type: 'horror',
                condition: 5,
                imageUrl: 'https://m.media-amazon.com/images/I/91DkmcRi4sL._AC_UY218_ML3_.jpg',
                title: 'Kingdom',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            },
            {
                id: uuid.v4(),
                autor: 'Achmatova Anna',
                type: 'poetry',
                condition: 3,
                imageUrl: 'https://m.media-amazon.com/images/I/91ewNSl222L._AC_UY218_ML3_.jpg',
                title: 'Poetry-Collection',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
                
            },   
            {   id: uuid.v4(),
                autor: 'Kristeva Julia',
                type: 'science',
                condition: 2,
                imageUrl: 'https://m.media-amazon.com/images/I/91lMICvbU3L._AC_UY218_ML3_.jpg',
                title: 'Intertextuality',
                description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
            }
        ];
        localStorage.setItem('bookslist', JSON.stringify(bookslist));
    }
    return JSON.parse(localStorage.getItem("bookslist"))
})()

const BooksListPage = () => {


    // PART FOR GETTIN BOOKS FROM FIREBASE
    const [booksFB, setBooksFB] = useState([]);
    useEffect(() => {
        watchBooks(booksFB => {
          setBooksFB(booksFB);
        });
    
        return () => {
          stopBooks();
        };
      }, []);


    //
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    
    //PART FOR RENDERING BOOKS FROM FIREBASE
    const booksList = booksFB.map(book => (
        <div key={book.id} className={styles.singleBook}>
        <Link to={`/book/${book.id}`}>
        <img src={book.imageUrl}/>
        <Book {...book} src={book.imageUrl}  />
        </Link>
    
    
        {/* <Link to={`/book/${book.id}`}>
        <img src={book.imageUrl}/>
        <Book key={book.id} {...book} src={book.imageUrl}  />
        </Link>
        {favorites.includes(book.id) ? <img src={star}/> : ''}
        <AddToFavorites id={book.id} onClick={() => {
            let newFavorites
            if (favorites.includes(book.id)) {
                newFavorites = favorites.filter(fav => fav !== book.id);
               
            } else {
                newFavorites = [...favorites, book.id]
            }
            setFavorites(newFavorites)
            localStorage.setItem('favorites', JSON.stringify(newFavorites))

        }}/> */}
        

        </div>
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


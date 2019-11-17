import React from 'react';
import Book from '../components/Book'

const books = [
    {
        id: 1,
        title: "Metro 2033",
        autor: "Dmitry Glukhovsky",
        type: "fantasy",
    },
    {
        id: 2,
        title: "Harry Potter",
        autor: "J. K. Rowling",
        type: "fantasy",
    },
    {
        id: 3,
        title: "Dziady cz. II",
        autor: "Adam Mickiewicz",
        type: "poetry",
    },
    {
        id: 4,
        title: "Zielona Mila",
        autor: "Stephen King",
        type: "fantasy",
    },
    {
        id: 5,
        title: "xxxx",
        autor: "Jan Kowalski",
        type: "fantasy",
    },
    {
        id: 6,
        title: "Dziady cz. II",
        autor: "Adam Mickiewicz",
        type: "poetry",
    }
]

const BooksPage = () => {
    const booksList = books.map(book => (
        <Book key={book.id} {...book} />
    ))


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}>
            {booksList}
        </div>
    );
}

export default BooksPage
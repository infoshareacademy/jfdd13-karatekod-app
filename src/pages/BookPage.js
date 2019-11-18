import React from 'react';
import {Link} from 'react-router-dom';
import Book from '../components/Book'

const BookPage = () => {
    return (
        <>
        <div>Strona produktu</div>
        <Book/>
        <Link to="/books">back to product list</Link>
        </>
    )
}

export default BookPage;
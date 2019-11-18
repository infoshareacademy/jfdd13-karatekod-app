import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product.js'

const BookPage = ({match}) => {
    return (
        <>
            <div>
            strona pojedynczej książki
            </div> 
         <Product/>
         
            <Link to="/books">back to books list</Link>
        </>
    )
}

export default BookPage;
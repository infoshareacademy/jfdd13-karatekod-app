
import React from 'react';
import {Link} from 'react-router-dom';
import Book from '../components/Book.js'

class AdminPage extends React.Component {
    constructor(props){
    super(props)
        this.state={
            favorites: JSON.parse(localStorage.getItem('favorites')),
            
        }
    }

        render(){
        return (
            <div>
                <h3>Welcome to BookSwap App!</h3>
                <div>Favorites:
                    {this.state.favorites.map(item =>{
                    return (
                        <div>                     
                            <Link style={{color:'black'}} to={`/book/${item}`}>
                                fav
                            </Link>
                        </div> 
                        )
                    })}          
                </div>
            </div>
            )
        }
    }
 
export default AdminPage
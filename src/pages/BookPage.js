import React from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from "../styles/BookPage.module.css"; // imports css styles
import { watchBooks, stopBooks } from '../services/BookService'

class BookPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
           bookslist:[],
           id:this.props.match.params.id,
           book:""
        }
    }
    // fetch books from firebase onmount
    componentDidMount(){
        watchBooks(bookslist => {
            this.setState({book:bookslist.find(book=>book.id===this.state.id)})})
    }
    // stop fetching books on unmount
    componentWillUnmount(){
        stopBooks();
    }

    render(){
        return (
        <div className={styles.container}>
            <div className={styles.bookCard}>
                <img className={styles.bookImage} src={this.state.book.imageUrl} />
                                <div className={styles.bookInfo}>
                                                    <div className={styles.bookInfo2}>
                                                                                <div className={styles.info}>Title: 
                                                                                    <div className={styles.info2}>{this.state.book.title}</div>
                                                                                </div>
                                                                    <div className={styles.info}>Author: 
                                                                        <div className={styles.info2}>{this.state.book.autor}</div>
                                                                    </div>
                                                                        <div className={styles.info}>Genre: 
                                                                            <div className={styles.info2}>{this.state.book.type}</div>
                                                                        </div>
                                                                            <div className={styles.info}>Condition: 
                                                                                <div className={styles.info2}>{this.state.book.condition}</div>   
                                                                            </div>
                                                    </div>
                                                                    <div className={styles.desc}>Description: 
                                                                        <div className={styles.info2}>{this.state.book.description}</div>   
                                                                    </div>
                                </div> 
            </div>
                                <div>
                                    <Link className={styles.link} to="/books">back to book list</Link>
                                </div>
        </div>
        )
    }
}


export default BookPage;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/SearchSection.module.css'
import AddToFavorites from '../components/AddToFavorites'
import heartFilled from '../images/heart2.png'
import heartEmpty from '../images/heart1.png'
import {addFavFirebase} from '../services/FavService'
import firebase from 'firebase'
import { BOOKS_PER_PAGE } from '../pages/Search'

class Listings extends Component {
    constructor() {
        super()
        this.state = {
            booksPerPage: 5,
            favs: {}
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
            if (user) {
                firebase.database().ref('favorites').child(user.uid).on('value', value => {
                    this.setState({
                        favs: value.val() || {}
                    })
                })
            }
        })
       
    }

    componentWillUnmount() {
        
        
        firebase.database().ref('favorites').child(this.state.user.uid).off('value')
    }


    loopListings() {
        const { booksList } = this.props;
        if (booksList == undefined || booksList == 0) {
            return ['   We are sorry but there is no books matching your criteria. Try other titles or come back soon']
        }
        return booksList.map((listing, index) => {
            return (
                <div>

                    <div className={styles.listingsResults} key={index}>
                        <div className={styles.listing}>
                        <Link to={`/book/${listing.id}`} 
                            style={{
                                display: "flex",
                                justifyContent: "center"
                                }}>
                            <div className={styles.listingImg}
                                style={{
                                    backgroundImage: `url("${listing.imageUrl}")`,
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                    }}>
                                    <div className={styles.details}>
                                        <div className={styles.userImg}></div>
                                        <div className={styles.userDetails}>
                                            <span className={styles.userName}>Anna</span>
                                            <span className={styles.postDate}>05.05.2019</span>
                                        </div>
                                        <div className={styles.listingDetails}>
                                            <div className={styles.moreDetails}>
                                                <span>{`${listing.description.slice(0, 107)}...`} <br />Click to get more info</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className={styles.bottomInfo}>
                                <div className={styles.bottomInfoDetail}>
                                    <p className={styles.title}>{listing.title} <br />{listing.autor}</p>
                                    <p className={styles.location}>condition: {listing.condition}</p>
                                </div>
                                <div className={styles.like}>
                                    <AddToFavorites id={listing.id} isFavorites = {this.state.favs[listing.id]}
                                    onClick={() => {
                                        addFavFirebase(listing.id, firebase.auth().currentUser)
                                        }} 
                                    />                               
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ textAlign: 'center' }}>

                    </div>
                </div>

            )}

        )
    }




    renderPageNumbers = () => {
        const pageNumbers = new Array(this.props.pages)
        for (let i = 0; i < this.props.pages; i++) {
            pageNumbers.push(i + 1)
        }
        return pageNumbers.map(number => {
            return (
                <li
                    style={(this.props.currentPage == number) ? { background: "pink" } : { background: "none" }}
                    key={number}
                    id={number}
                    onClick={() => this.props.handleClick(number)}
                >
                    {number}
                </li>);
        })
    }


    render() {
        const { currentPage } = this.props;
        const booksList = this.loopListings();
        const indexOfLastBook = currentPage * BOOKS_PER_PAGE;
        const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE
        const currentBooks = booksList.slice(indexOfFirstBook, indexOfLastBook)
        const renderBooks = currentBooks.map((book, index) => {
            return <div style={{width: "300px"}}key={index}>{book}</div>
        })
        const books = this.props.booksList

        return (
            <>
                
                {(books.length !=0) ?
                    (<><div className={styles.grid}>
                        {renderBooks}
                    </div>
                    
                    <div className={styles.pagination}>
                        <div className={styles.paginationNav} onClick={this.props.handleClickPrev}>prev </div>
                        <ul className={styles.paginationPages}>
                            {this.renderPageNumbers()}
                        </ul>
                        <div className={styles.paginationNav} onClick={this.props.handleClickNext}>next</div>
                    </div></>
                    
                    ) : <div>no books matching your criteria</div>
                }
            </>

        )
    }
}

export default Listings






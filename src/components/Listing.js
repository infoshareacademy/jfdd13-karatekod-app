import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/SearchSection.module.css'




 class Listings extends Component {
     constructor() {
         super()
         this.state = {
            currentPage: 1,
            booksPerPage: 5

         }
         this.loopListings = this.loopListings.bind(this);
         this.handleClick= this.handleClick.bind(this)
         this.handleClickNext = this.handleClickNext.bind(this)
         this.handleClickPrev = this.handleClickPrev.bind(this)
         
     }

     handleClick(event) {
        
         this.setState({
             currentPage: Number(event.target.id)
         })
         
     }
     handleClickNext(event) {
         const booksList=this.loopListings();
         const nextPage = this.state.currentPage + 1
            if (this.state.currentPage < Math.ceil(booksList.length / this.state.booksPerPage)) {
                this.setState ({
                    currentPage: nextPage
                })
            }
        }
     handleClickPrev(event) {
         if (this.state.currentPage > 1) {
            const prevPage = this.state.currentPage - 1
        
            this.setState ({
                currentPage: prevPage
            })
        }
    }
    

     loopListings () {
        const {booksList} = this.props;
        if (booksList == undefined || booksList == 0) {
            return ['   We are sorry but there is no books matching your criteria. Try other titles or come back soon']
        }
        return booksList.map((listing, index) => {
            return (
                <Link to={`/book/${listing.id}`}>
                    <div className = {styles.listingsResults} key={index}>
                    <div className= {styles.listing}>
                        <div className= {styles.listingImg}
                        style={{
                            background:`url("${listing.imageUrl}") no-repeat center center`
                        
                        }}>
                            
                            
                            <div className = {styles.details}>
                                <div className = {styles.userImg}></div>
                                <div className = {styles.userDetails}>
                                    <span className = {styles.userName}>Anna</span>
                                    <span className = {styles.postDate}>05.05.2019</span>
                                </div>
                                <div className = {styles.listingDetails}>
                                <div className = {styles.moreDetails}>  
                                <span>{`${listing.description.slice(0,107)}...`} <br/>Click to get more info</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className= {styles.bottomInfo}>
                            <p className= {styles.title}>{listing.title} <br/>{listing.autor}</p>
                            <p className={styles.location}>condition: {listing.condition}</p>
                        </div>
                    </div>
                </div>
            </Link>
                    )
                }       
        
            )
         }
     





         
    render() {

       
        const {currentPage, booksPerPage} = this.state;
        const booksList = this.loopListings();
        const indexOfLastBook = currentPage * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage
        const currentBooks=  booksList.slice(indexOfFirstBook, indexOfLastBook)


        const renderBooks = currentBooks.map((book, index) => {
            return <div key = {index}>{book}</div>
        })

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(booksList.length / booksPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
            <li
                style = {(this.state.currentPage == number) ? {background:"pink"} : {background: "none"}}
                key = {number}
                id = {number}
                onClick = {this.handleClick}
                >
                    {number}
                </li>);
        })




        return (
            
                <>
                <div className={styles.grid}>
                       
                       {renderBooks}
                        
                </div>
                <div className = {styles.pagination}>
                    <div className = {styles.paginationNav} onClick={this.handleClickPrev}>prev </div>
                    <ul className = {styles.paginationPages}>
                        {renderPageNumbers}
                    </ul>
                    <div className = {styles.paginationNav} onClick= {this.handleClickNext}>next</div>
                </div>

            </>
            
        )
    }
}

export default Listings






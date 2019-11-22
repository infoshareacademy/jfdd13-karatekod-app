import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/SearchSection.module.css'




 class Listings extends Component {
     constructor() {
         super()
         this.state = {

         }
         this.loopListings = this.loopListings.bind(this);
     }

     loopListings () {
        const {booksList} = this.props;
        if (booksList == undefined || booksList == 0) {
            return <div style={{fontSize:"40px", gridColumn:"2/4"}}>Sorry but there is no books to swap matching your criteria"</div>
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
                            <div className = {styles.moreDetails}>  </div>
                            <span>More info</span>
                            </div>
                        </div>
                    </div>
                    <div className= {styles.bottomInfo}>
                        <p className= {styles.title}>"{listing.title}"" by:  {listing.autor}</p>
                        <p className={styles.location}> condition:{listing.condition}</p>
                    </div>
                </div>
            </div>
            </Link>
            )

        }
        
        
        )

     }
     

    render() {
        return (
            
                <div>
                <div className={styles.grid}>
                       
                       {this.loopListings()}
                        
                </div>
                <div className = {styles.pagination}>
                    <ul className={styles.pages}>
                        <li >Prev</li>
                        <li className={styles.active}>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>Next</li>
                    </ul>
                </div>

            </div>
            
        )
    }
}

export default Listings






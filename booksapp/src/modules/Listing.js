import React, { Component } from 'react'
import styles from './SearchSection.module.css'




 class Listings extends Component {
     constructor() {
         super()
         this.state = {

         }
         this.loopListings = this.loopListings.bind(this);
     }

     loopListings () {
        const {listingsData} = this.props;
        if (listingsData == undefined || listingsData == 0) {
            return <div style={{fontSize:"40px", gridColumn:"2/4"}}>Sorry but there is no books to swap matching your criteria"</div>
        }
        return listingsData.map((listing, index) => {
            return (
                <div className = {styles.listingsResults} key={index}>
                <div className= {styles.listing}>
                    <div className= {styles.listingImg}
                    style={{
                        background:`url("${listing.image}") no-repeat center center`
                    
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
                        <p className= {styles.title}>"{listing.title}"" by: {listing.author} {listing.name}</p>
                        <p className={styles.location}>{listing.radius} km away</p>
                    </div>
                </div>
            </div>
            )

        }
        
        
        )

     }
     

    render() {
        return (
            <div className={styles.listings}>
                {/* <div className = {styles.searchArea}> 
                    <input type="text" name ="search" placeholder="Filter by title" />
                </div> */}
                
                <div className = {styles.sortbyArea}>
                    <div className = {styles.results}>{this.props.length} books found</div>
                    <div className = {styles.sortOptions}>
                        <select name = "sortby" className = {styles.sortby}>
                            <option value= "price-asc">distance</option>
                            <option value= "pice-dsc">Autor</option>
                        </select>
                        <div className={styles.view}>
                            <img src="../../src/images/list.svg" width="30px" height="30px" />
                            <img src="../images/gallery.svg" width="30px" height="30px"/>
                        </div>
                    </div>
                </div>
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






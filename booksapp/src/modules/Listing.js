import React, { Component } from 'react'
import styles from './SearchSection.module.css'



 class Listings extends Component {
     constructor() {
         super()
         this.state = {

         }
     }

     

    render() {
        return (
            <div className={styles.listings}>
                <div className = {styles.searchArea}> 
                    <input type="text" name ="search" placeholder="Filter by title" />
                </div>
                
                <div className = {styles.sortbyArea}>
                    <div className = {styles.results}>200 books found</div>
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
                        <div className = {styles.listingsResults}>
                            <div className= {styles.listing}>
                                <div className= {styles.listingImg}>
                                    
                                    
                                    <div className = {styles.details}>
                                        <div className = {styles.userImg}></div>
                                        <div className = {styles.userDetails}>
                                            <span className = {styles.userName}>Karol</span>
                                            <span className = {styles.postDate}>05.05.2019</span>
                                        </div>
                                        <div className = {styles.listingDetails}>
                                        <div className = {styles.moreDetails}>  </div>
                                        <span>More info</span>
                                        </div>
                                    </div>
                                </div>
                                <div className= {styles.bottomInfo}>
                                    <span className= {styles.title}>Title</span>
                                    <span className={styles.location}>Location</span>
                                </div>
                            </div>
                        </div>
                       
                        
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






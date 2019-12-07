
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { watchBooks, stopBooks } from '../services/BookService'
import styles from '../styles/SearchSection.module.css'
import AddToFavorites from '../components/AddToFavorites'
import { addFavFirebase } from '../services/FavService'
import heartFilled from '../images/heart2.png'
import heartEmpty from '../images/heart1.png'

class Favs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favs: {},
            booksList: []
        }
        this.loopFav = this.loopFav.bind(this)
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
        watchBooks(booksList => {
            this.setState({ booksList });
        });
    }
    componentWillUnmount() {
        stopBooks()
    }
    loopFav() {
        const { booksList } = this.state;
        const { favs } = this.state
        const favsArray = Object.keys(favs)
        const output = []
        booksList.filter(item => {
            favsArray.forEach(element => {
                if (element === item.id) {
                    output.push(item)
                    return output
                } else { return }
            })
        })
        console.log(output)
        if (output == undefined || output == 0) {
            return ['Loading your favourite books...']
        }
        return output.map((listing, index) => {
            return (
                <div>
                    <div className={styles.listingsResults} key={index}>
                        <div className={styles.listing}>
                            <Link to={`/book/${listing.id}`}>
                                <div className={styles.listingImg}
                                    style={{
                                        background: `url("${listing.imageUrl}") no-repeat center center`
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
                                    <AddToFavorites id={listing.id} isFavorites={this.state.favs[listing.id]}
                                        onClick={() => {
                                            addFavFirebase(listing.id, firebase.auth().currentUser)
                                        }
                                        } />
                                    {this.state.favs[listing.id] ? <img style={{ width: "25px", height: "25px" }} src={heartFilled}></img> : <img style={{ width: "25px", height: "25px" }} src={heartEmpty}></img>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                    </div>
                </div>
            )
        }
        )
    }
    render() {
        return (
            <>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.loopFav()}
                </div>
            </>
        )
    }
}
export default Favs
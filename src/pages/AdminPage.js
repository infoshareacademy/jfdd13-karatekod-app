
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { watchBooks, stopBooks } from '../services/BookService'
import styles from '../styles/AdminPage.module.css'
import AddToFavorites from '../components/AddToFavorites'
import { addFavFirebase } from '../services/FavService'
//import heartFilled from '../images/heart2.png'
//import heartEmpty from '../images/heart1.png'


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
                <div className={styles.favWrap}>
                    <Link to={`/book/${listing.id}`} className={styles.navLinkFav} style={{ width: '100%', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                        <div className={styles.bookDetails}>
                            <div className={styles.bookImageFav}
                            style={{
                                background: `url("${listing.imageUrl}")`,
                                width: '95px',
                                minHeight:'100px',
                                backgroundSize: 'cover',
                            }}>
                            </div>
                            <div className={styles.bookDetailsFav} >
                                <p className={styles.title}><span className={styles.small}>Title: </span><br className={styles.smallBreak}/><i>{listing.title}</i></p>
                                <p className={styles.title}><span className={styles.small}>Author: </span><br className={styles.smallBreak}/>{listing.autor}</p>
                                <p className={styles.title}><span className={styles.small}>Condition: </span><br className={styles.smallBreak}/>{listing.condition}</p>
                            </div>
                        </div>
                    </Link>
                    <div className={styles.like}>
                        <AddToFavorites id={listing.id} isFavorites={this.state.favs[listing.id]}
                            onClick={() => {
                                addFavFirebase(listing.id, firebase.auth().currentUser)
                            }
                            } />
                    </div>
                </div>
            )
        }
        )
    }
    render() {
        return (
            <>
                <div className={styles.favContainer} >
                    {this.loopFav()}
                </div>
            </>
        )
    }
}
export default Favs
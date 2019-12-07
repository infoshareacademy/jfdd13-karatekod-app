
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { watchBooks, stopBooks } from '../services/BookService'
import styles from '../styles/AdminPage.module.css'
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
                    <Link to={`/book/${listing.id}`} style={{width:'500px', color: 'black'}}>
                        <div style={{
                                background: `url("${listing.imageUrl}")`,
                                width: '50px',
                                height: '50px',
                                backgroundSize: 'cover'
                            }}>
                        </div>
                        <p className={styles.title}>{listing.title}{listing.autor}{listing.condition}</p>
                        <div className={styles.like}>
                            <AddToFavorites id={listing.id} isFavorites={this.state.favs[listing.id]}
                                onClick={() => {
                                    addFavFirebase(listing.id, firebase.auth().currentUser)
                                }
                                } />
                            {this.state.favs[listing.id] ? <img style={{ width: "25px", height: "25px" }} src={heartFilled}></img> : <img style={{ width: "25px", height: "25px" }} src={heartEmpty}></img>}
                        </div>
                    </Link>
            )
        }
        )
    }
    render() {
        return (
            <>
                <div style={{ display: "flex", flexDirection:'column' }}>
                    {this.loopFav()}
                </div>
            </>
        )
    }
}
export default Favs
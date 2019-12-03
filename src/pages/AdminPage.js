
import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase'
import { watchBooks, stopBooks } from '../services/BookService'
import { books } from './BooksListPage';




class AdminPage extends React.Component {
    constructor(props){
    super(props)
        this.state={
            favs: {},
            booksList:[],

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
            this.setState({booksList});
            
      
          });
      
    //    this.loopFav()
    }

    loopFav() {
        const {booksList} = this.state;
        const {favs} = this.state
        const favsArray = Object.keys(favs)
        
        const output = []
        booksList.filter(item => {
            favsArray.forEach(element => {
                if (element === item.id) {
                    output.push(item)
                    return output
                } else {return}
            })
        })
        
        console.log(output)


    }



        render(){
        return (
            <div>
                {this.loopFav()}
                
                {/* <h3>Welcome to BookSwap App!</h3>
                <div>Favorites: 
                    
                    {this.state.favs.map(item =>{
                    return (
                        <div>
                            <Link style={{color:'black'}} to={`/book/${item}`}>fav</Link>
                        </div>
                        )
                    })}          
                </div> */}
            </div>
            )
        }
    }
 
export default AdminPage
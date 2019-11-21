import React from 'react';
import {Link, useParams} from 'react-router-dom';




let bookslist = JSON.parse(localStorage.getItem("bookslist"))

class BookPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
           bookslist:bookslist,
           id:this.props.match.params.id,
           book:""
        }
    }


    componentDidMount(){
        const myBook = bookslist.find(book=>book.id===this.state.id)
        this.setState({book:myBook})
        console.log(myBook)
        console.log(this.state.myBook)
    }


    render(){
        return (
            <div>

    <div className='title'>Title: {this.state.book.title}</div>
    <div className='genre'>Genre: {this.state.book.type}</div>
    <div className='condition'>Condition: {this.state.condition}</div>
    <p>Genre: {this.state.book.type}</p>
    <p>Condition of the book: {this.state.book.condition}</p>
            

         
            <Link to="/books">back to books list</Link>
            </div> 


        )
    }
}


export default BookPage;
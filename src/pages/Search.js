import React, { Component } from 'react';
// import booksListings? from '../Data/Database'

import Filter from '../components/Filter'
import Listings from '../components/Listing'
import { watchBooks, stopBooks } from '../services/BookService'

export const BOOKS_PER_PAGE = 5

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      booksList:[],
      range:2,
      filteredData: [],
      type: 'any',
      autor: '',
      title: '',
      currentPage: 1
    }
    this.change = this.change.bind(this)
    this.changeFilterRange = this.changeFilterRange.bind(this)
    this.filteredData = this.filteredData.bind(this)
    

  }

  change(event) {
   
    const name = event.target.name
    const value = event.target.value
    this.setState ({
      [name]:value,
      currentPage: 1
    }, ()=> {
      console.log(this.state)
      this.filteredData();
    })
  }

  changeFilterRange(value) {
    this.setState({
      range: value,
      currentPage: 1
    })
    this.filteredData();
  }

  componentDidMount(){
    watchBooks(booksList => {
      this.setState({booksList});
      this.filteredData()

    });

    
  }

  componentWillUnmount() {
    stopBooks()
  }



 


  filteredData() {
    let newData = this.state.booksList.filter((item) => {
      return (this.state.type === 'any') ? (item.condition <= this.state.range) :
       (item.type == this.state.type && item.condition <= this.state.range)
    })

    if(this.state.search != '') {
      newData = newData.filter((item) => {
        const author = item.autor.toLowerCase();
        const searchText = this.state.autor.toLowerCase();
        const outcome = author.match(searchText)

        if (outcome != null) {
          return true
        }
      })
    }
    if(this.state.search != '') {
      newData = newData.filter((item) => {
        const title = item.title.toLowerCase();
        const searchText = this.state.title.toLowerCase();
        const outcome = title.match(searchText)

        if (outcome != null) {
          return true
        }
      })
    }
    this.setState({
    filteredData: newData
    })
    
    

  }

  get pages () {
    return Math.ceil(this.state.filteredData.length / BOOKS_PER_PAGE)
  }

  handleClickNext = () => {
    if (this.state.currentPage >= this.pages) {
      return
    }
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  handleClickPrev = () => {
    if (this.state.currentPage <= 1) {
      return
    }

    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  handleClick = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    
  return (
    
        
      
      
        
        <section id="content-area">
          <Filter change={this.change} changeFilterRange={this.changeFilterRange} globalState= {this.state} />
          <Listings
            booksList= {this.state.filteredData}
            currentPage={this.state.currentPage}
            handleClickNext={this.handleClickNext}
            handleClickPrev={this.handleClickPrev}
            handleClick={this.handleClick}
            pages={this.pages}  
          />
        </section>
       
     
  );
  }
}




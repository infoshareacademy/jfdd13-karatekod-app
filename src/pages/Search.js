import React, { Component } from 'react';
// import booksListings? from '../Data/Database'
import {booksList} from '../pages/BooksListPage'
import Filter from '../components/Filter'
import Listings from '../components/Listing'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      
      booksList,
      range:100,
      filteredData: booksList,
      type: 'any',
      autor: '',
      title: ''
      

    }
    this.change = this.change.bind(this)
    this.changeFilterRange = this.changeFilterRange.bind(this)
    this.filteredData = this.filteredData.bind(this)
    

  }
  change(event) {
   
    const name = event.target.name
    const value = event.target.value
    this.setState ({
      [name]:value
    }, ()=> {
      console.log(this.state)
      this.filteredData();
    })
  }

  changeFilterRange(value) {
    this.setState({
      range: value
    })
  }

  filteredData() {
    let newData = this.state.booksList.filter((item) => {
      return (this.state.type === 'any') ? (item.condition <= this.state.range) :
       (item.genere == this.state.genere && item.radius <= this.state.range)
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

  render() {
    
  return (
    
        
      
      
        
        <section id="content-area">
          <Filter change={this.change} changeFilterRange={this.changeFilterRange} globalState= {this.state} />
          <Listings booksList= {this.state.filteredData} />
        </section>
       
     
  );
  }
}




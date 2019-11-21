import React, { Component } from 'react';
// import listingsData from '../Data/Database'
import Filter from '../components/Filter'
import Listings from '../components/Listing'
// import books from '../pages/BooksListPage'
import {booksList} from '../pages/BooksListPage'

export default class Search extends Component {
  constructor() {
    super() 
    this.state = {
      
      booksList,
      condition:100,
      filteredData: booksList,
      type: 'any',
      autor: '',
      title: ''
      

    }
    this.change = this.change.bind(this)
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

  filteredData() {
    let newData = this.state.booksList.filter((item) => {
      return (this.state.type === 'any') ? (item.condition <= this.state.range) :
       (item.type == this.state.type && item.condition <= this.state.range)
    })

    if(this.state.search != '') {
      newData = newData.filter((item) => {
        const autor = item.autor.toLowerCase();
        const searchText = this.state.autor.toLowerCase();
        const outcome = autor.match(searchText)

        if (outcome != null) {
          return true
        }
      })
    }
    // if(this.state.search != '') {
    //   newData = newData.filter((item) => {
    //     const title = item.title.toLowerCase();
    //     const searchText = this.state.title.toLowerCase();
    //     const outcome = title.match(searchText)

    //     if (outcome != null) {
    //       return true
    //     }
    //   })
    // }
    




    this.setState({
      filteredData: newData
    })
    
    

  }

  render() {
    
  return (
    
        
      
      
        
        <section id="content-area">
          <Filter change={this.change} globalState= {this.state} />
          <Listings booksList= {this.state.filteredData} />
        </section>
       
     
  );
  }
}




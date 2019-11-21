import React, { Component } from 'react';
import listingsData from '../Data/Database'
import Filter from '../components/Filter'
import Listings from '../components/Listing'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      
      listingsData,
      range:100,
      filteredData: listingsData,
      genere: 'any',
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
    let newData = this.state.listingsData.filter((item) => {
      return (this.state.genere === 'any') ? (item.radius <= this.state.range) :
       (item.genere == this.state.genere && item.radius <= this.state.range)
    })

    if(this.state.search != '') {
      newData = newData.filter((item) => {
        const author = item.author.toLowerCase();
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
          <Filter change={this.change} globalState= {this.state} />
          <Listings listingsData= {this.state.filteredData} />
        </section>
       
     
  );
  }
}




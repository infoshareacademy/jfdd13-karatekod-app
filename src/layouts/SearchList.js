import React, { Component } from 'react';
import listingsData from '../Data/Database'
import Filter from './Filter'
import Listings from './Listing'


export default class SearchList extends Component {
  constructor() {
    super()
    this.state = {
      
      listingsData,
      range:50,
      filteredData: listingsData,
      genere: 'any',
      

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
    const newData = this.state.listingsData.filter((item) => {
      return (this.state.genere === 'any') ? (item.radius <= this.state.range) :
       (item.genere == this.state.genere && item.radius <= this.state.range)
    })
    this.setState({
      filteredData: newData
    })
  }

  render() {
    
  return (
    
        
      <div className="searchList">
      
        
          <Filter change={this.change} globalState= {this.state} />
          <Listings listingsData= {this.state.filteredData} />
       
        
      </div>
      
  );
  }
}





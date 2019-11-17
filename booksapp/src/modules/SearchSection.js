import React, { Component } from 'react'
import Listing from './Listing';
import Filter from './Filter'


export class SearchSection extends Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <section>
                <Filter />
                <Listing listingData = {this.props.listingData} />
            </section>
        )
    }
}

export default SearchSection

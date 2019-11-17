import React, { Component } from 'react'
import Listing from './Listing';
import Filter from './Filter'


export class SearchSection extends Component {
    render() {
        return (
            <section>
                <Filter />
                <Listing />
            </section>
        )
    }
}

export default SearchSection

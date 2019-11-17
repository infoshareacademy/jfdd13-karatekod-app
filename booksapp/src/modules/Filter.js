import React, { Component } from 'react';
import styles from './SearchSection.module.css'
// import InputRange from 'react-input-range';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"



export class Filter extends Component {
    constructor(){
        super();
        this.state = {value : '1'}
    }




    render() {
        return (
            <div className={styles.filter}>
                <h4>Select criteria for books searching</h4>

                <div className={styles.forms}>
                    
                    <input type="text" placeholder='author or title' />
                    <label>choose genere
                        <select name="genere">
                            <option>Any</option>
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Fantasy</option>
                            <option>Horror</option>
                            <option>Poetry</option>
                            <option>Romance</option>
                            <option>Science</option>
                            <option>Sience-Fiction</option>
                        </select>
                    </label>
                    <label>select distance
                       
                        <InputRange
                            maxValue={100}
                            minValue={1}
                            value={this.state.value} 
                            onChange={value => this.setState({ value })}
                        />
                    </label>

                </div>
            </div>
        )
    }
}

export default Filter



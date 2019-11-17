import React, { Component } from 'react';
import styles from './SearchSection.module.css'

export class Filter extends Component {
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
                        <input type="range" min="1" max="100" />
                    </label>

                </div>
            </div>
        )
    }
}

export default Filter



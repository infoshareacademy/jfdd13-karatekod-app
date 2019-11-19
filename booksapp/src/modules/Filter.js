import React, { Component } from 'react';
import styles from './SearchSection.module.css'

import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"



export class Filter extends Component {
    constructor(){
        super();
        this.state = {value:1}
    }




    render() {
        return (
            <div className={styles.filter}>
                <h4>Select criteria for books searching</h4>

                <div className={styles.forms}>
                    
                    <input type="text" name="search" placeholder='author or title' onChange = {this.props.change}/>
                    <label>choose genere
                        <select name="genere" onChange = {this.props.change}>
                            <option value="any">Any</option>
                            <option value='action'>Action</option>
                            <option value='comedy'>Comedy</option>
                            <option value='drama'>Drama</option>
                            <option value='fantasy'>Fantasy</option>
                            <option value='horror'>Horror</option>
                            <option value='poetry'>Poetry</option>
                            <option value='romance'>Romance</option>
                            <option value='science'>Science</option>
                            <option value='sifi'>Sience-Fiction</option>
                        </select>
                    </label>
                    
                       
                        <input type="range" name="range" onChange = {this.props.change}
                            max={100}
                            min={1}
                            step={1}
                            value = {this.props.globalState.range}
                            
                            
                          
                        />
                    

                </div>
            </div>
        )
    }
}

export default Filter



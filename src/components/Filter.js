import React, { Component } from 'react';
import styles from '../styles/SearchSection.module.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'




export class Filter extends Component {
    constructor(){
        super();
        // this.state = {value:1}
    }




    render() {
        return (

        <div>

            <h4 className={styles.textHeader}>Select criteria for books searching</h4>
            <div className={styles.filter}>
                

                <div className={styles.forms}>
                    <div className={styles.searchTextInputs}>
                        <input type="text" name="autor" placeholder='author' onChange = {this.props.change} className={styles.searchText}/>
                        
                        <input type="text" name="title" placeholder='title' onChange = {this.props.change} className={styles.searchText}/>
                    </div>
                    <div >
                    <select name="type" onChange = {this.props.change} className={styles.dropdown} >
                        <option value="any">genere</option>
                        <option value='action'>Action</option>
                        <option value='comedy'>Comedy</option>
                        <option value='drama'>Drama</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='horror'>Horror</option>
                        <option value='poetry'>Poetry</option>
                        <option value='romance'>Romance</option>
                        <option value='science'>Science</option>
                        <option value='sifi'>Sci-Fi</option>
                    </select>
                    </div>
                    
                       
                    <InputRange
                            globalState = {this.props.globalState}
                            change = {this.props.change}
                            name="condition"
                            type = "range"
                            maxValue={100}
                            minValue={0}
                            value={this.props.globalState.range}
                            onChange={this.props.change} />



                        {/* <input type="range" name="range" onChange = {this.props.change}
                            max={100}
                            min={1}
                            step={1}
                            value = {this.props.globalState.range}
                        > */}
                    </div>

                
            </div>
        </div>
        )
    }
}

export default Filter



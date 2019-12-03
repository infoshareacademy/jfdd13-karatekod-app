import React, { Component } from 'react';
import styles from '../styles/SearchSection.module.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'




export class Filter extends Component {
    
    render() {
        return (

        <div>

            {/* <h4 className={styles.textHeader}>Select criteria for books searching</h4> */}
            <div className={styles.filter}>
                

                <div className={styles.forms}>
                    <div className={styles.searchTextInputs}>
                        <input type="text" name="autor" placeholder='author' onChange = {this.props.change} className={styles.searchText}/>
                        
                        <input type="text" name="title" placeholder='title' onChange = {this.props.change} className={styles.searchText}/>
                    </div>
                    <div >
                    <select name="type" onChange = {this.props.change} className={styles.dropdown} >
                        <option value="any">genre</option>
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
                        <p className={styles.sliderDescription}>select book condition</p>
                       <div className={styles.rangeSlider}>
                       
                        <InputRange
                                
                                globalState = {this.props.globalState}
                                type = "range"
                                
                                maxValue={5}
                                minValue={1}
                                value={this.props.globalState.range}
                                onChange={this.props.changeFilterRange} />
                                

                        </div>

                        
                    </div>

                
            </div>
        </div>
        )
    }
}

export default Filter



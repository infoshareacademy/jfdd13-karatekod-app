import React, { Component } from 'react';
import styles from '../styles/SearchSection.module.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

export class Filter extends Component {   
    render() {
        return (
        <div>
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
                    <div style={{maxWidth:"500px", minWidth:"400px", display:"flex"}}>
                    <p className={styles.sliderDescription}>select book condition: from 1 (perfect) to 5 (bad)</p>
                    <div className={styles.rangeSlider} style={{width:'60%', paddingRight:'90px'}}>
                    
                        <InputRange  
                                globalState = {this.props.globalState}
                                type = "range" 
                                maxValue={5}
                                minValue={1}
                                value={this.props.globalState.range}
                                onChange={this.props.changeFilterRange}
                                formatLabel={value => 
                                    (value==1) ? `perfect only`:
                                    (value==2)?`perfect and good `:
                                    (value==3)?'perfect, good and used':
                                    (value==4)? 'all but bad':
                                    (value==5)? 'all books':
                                    (value==0)? 'condition':null}     
                        />
                    </div> 
                    </div>        
                </div>
            </div>
        </div>
        )
    }
}

export default Filter



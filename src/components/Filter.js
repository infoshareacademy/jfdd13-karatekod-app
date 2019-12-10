import React, { Component } from 'react';
import styles from '../styles/SearchSection.module.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { Input, Select } from 'bloomer'; 
import 'bulma/css/bulma.min.css'

export class Filter extends Component {   
    render() {
        return (
        <div>
            <div className={styles.filter}>
                <div className={styles.forms}>
                    <div className={styles.searchTextInputs}>
                        <Input isColor="black" type="text" name="autor" placeholder='author' onChange = {this.props.change} className={styles.searchText}/>
                        <Input isColor="black" type="text" name="title" placeholder='title' onChange = {this.props.change} className={styles.searchText}/>
                    </div>
                    <div >
                    <Select isColor="black"
                    name="type" 
                    onChange = {this.props.change} 
                     >
                        <option value="any">genre</option>
                        <option value="fantasy">fantasy</option>
                        <option value="drama">drama</option>
                        <option value="romance">romance</option>
                        <option value="thriller">thriller</option>
                        <option value="guide">guide</option>
                        <option value="crime">crime</option>
                        <option value="biography">biography</option>
                        <option value="other">other</option>
                    </Select>
                    </div>
                    <div className={styles.divv}
                     >
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



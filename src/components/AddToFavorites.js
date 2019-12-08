import React from 'react';
import styles from '../styles/Books.module.css';
import { Button } from 'bloomer'; 
import 'bulma/css/bulma.min.css'

class AddToFavorites extends React.Component {
render(){
    return(   
        <Button isColor='danger' onClick={this.props.onClick} className={styles.like}>{this.props.isFavorites ? 'remove from favorites' : 'add to favorites'}</Button>
    )
}
}


export default AddToFavorites

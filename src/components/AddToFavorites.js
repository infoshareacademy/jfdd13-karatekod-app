import React from 'react'
import styles from '../styles/Books.module.css'

class AddToFavorites extends React.Component {
render(){
    return(       
        <button onClick={this.props.onClick} className={styles.like}>{this.props.isFavorites ? 'remove from favorites' : 'add to favorites'}</button>
    )
}
}


export default AddToFavorites

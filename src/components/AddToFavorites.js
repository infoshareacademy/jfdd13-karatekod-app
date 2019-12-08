import React from 'react';
import styles from '../styles/Books.module.css';
import 'bulma/css/bulma.min.css'
import heartFilled from '../images/heart2.png'
import heartEmpty from '../images/heart1.png'

class AddToFavorites extends React.Component {
render(){
    return(   
        <img className={styles.likeHeart} onClick={this.props.onClick} src={this.props.isFavorites ? heartFilled:heartEmpty}></img>
    )
}
}


export default AddToFavorites

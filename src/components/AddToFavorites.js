import React from 'react';
import styles from '../styles/Books.module.css';
import 'bulma/css/bulma.min.css'
import heartFilled from '../images/heart2.png'
import heartEmpty from '../images/heart1.png'

class AddToFavorites extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isFav: "",
        }
    }
    isFav(){
        this.props.isFavorites?(console.log('true')):(console.log('false'))
    }
render(){
    return(   
        <img alt="like" className={styles.likeHeart} onMouseEnter={()=>{this.isFav(); console.log('enter')}} onMouseLeave={()=>{this.isFav(); console.log('leave')}} onClick={this.props.onClick} src={this.props.isFavorites ? heartFilled:heartEmpty}></img>
    )
}
}


export default AddToFavorites

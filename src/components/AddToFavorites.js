import React from 'react'
import styles from '../styles/Books.module.css'

class AddToFavorites extends React.Component {
constructor(props){
    super(props)
    this.state={
        innerButtonText: "add to favorites"
    
    }
}

render(){
    return(
        <img onClick={() => this.props.onClick()} className={styles.like} src='https://www.pikpng.com/pngl/b/306-3065627_instagram-heart-png-clipart-background-discord-heart-emoji.png'></img>
    )
}
}

export default AddToFavorites





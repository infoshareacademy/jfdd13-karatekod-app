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
        <button onClick={() => this.props.onClick()}>{this.state.innerButtonText}</button>
    )
}
}


export default AddToFavorites

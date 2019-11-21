import React from 'react'
import styles from '../styles/Books.module.css'

class AddToFavorites extends React.Component {
constructor(props){
    super(props)
    this.state={
        id: this.props.id,
        autor: this.props.autor,
        type: this.props.type,
        state: this.props.state
    }
}



render(){
    return(
        <button onClick={() => this.props.onClick()}>Add to Favorites</button>
    )
}
}

export default AddToFavorites





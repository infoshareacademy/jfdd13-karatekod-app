import React from 'react'
import menu1 from '../images/menu1.png';
import styles from "../styles/Navigation.module.css";



class ButtonMenu extends React.Component{
    constructor() {
        super(); 
        this.state = {
          clicked: false,
        }  
    }
    
    showMenu = () => {
        this.setState({
          clicked: true,
        });
      }

    render(){
        return (
            <img src={menu1} className={styles.menuTitle} alt="menu"
            onClick={this.ToggleMenu} 
            />
        )
    }
}

export default ButtonMenu
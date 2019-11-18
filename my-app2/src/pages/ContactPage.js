import React from 'react';
import { Prompt } from 'react-router-dom'

import styles from "../styles/Contact.module.css";

class ContactPage extends React.Component {
    state = {
        value: ""
    }

    //strona sie nie odswieżav po kliknieciu buttona i form sie czysci
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })

    }
        render (){
        return (
            <div clasName={styles.contact}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to us</h3>
                    <textarea value={this.state.value}
                    onChange={this.handleChange} placeholder="type message here"></textarea>
                    <button className={styles.button}>send</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="do you really want to leave the page"
                />
            </div>
        )
    }
}

export default ContactPage
import React from 'react';

class ContactPage extends React.Component {
    state = {
        value: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })

    }
        render (){
        return (
            <div clasName="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to us</h3>
                    <textarea value={this.state.value}
                    onChange={this.handleChange} placeholder="type message here"></textarea>
                    <button>send</button>
                </form>
            </div>
        )
    }
}

export default ContactPage
import React from 'react';



const Book = (props) => {
    return (
            <div style={{
                margin: '50px'
            }}>
                <h2>{props.title}</h2>
                <h3>{props.autor}</h3>
                <h4>{props.type}</h4>
            </div>
    )
}

export default Book
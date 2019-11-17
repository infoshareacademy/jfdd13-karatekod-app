import React from 'react';



const Book = (props) => {
    return (
            <div style={{
                margin: '50px',
                display: 'flex',
                flexGrow: 1,
                width: '20%',
                flexDirection: 'column'
                
            }}>
                <h2>{props.title}</h2>
                <h2>{props.autor}</h2>
                <h4>{props.type}</h4>
            </div>
    )
}

export default Book
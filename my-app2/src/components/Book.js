import React from 'react';



const Book = (props) => {
    return (
            <div style={{
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                                            
                
            }}>
                <h4>{props.title}</h4>
                <h4>{props.autor}</h4>
                <h5>{props.type}</h5>
            </div>
    )
}

export default Book
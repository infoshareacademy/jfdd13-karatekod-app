import React from 'react';





const Book = (props) => {
    return (
        <div style={{
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                fontSize: '18px',
                fontWeight: 'bold'
            }}>{props.title}</div>
            <div style={{
                fontSize: '16px',
                fontWeight: 'bold'
            }}>{props.autor}</div>
            <div style={{
                fontSize: '16px',
                fontWeight: 'bold'
            }}>
                {props.type}</div>
                <div style={{
                fontSize: '16px',
                fontWeight: 'bold'
            }}>
                condition: {props.condition}</div>
                
                
        </div>
        
    )
}

export default Book
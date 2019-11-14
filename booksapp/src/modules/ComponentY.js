import React from 'react';
import '../modules/Component.module.css';

function ComponentY() {
  const mystyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }

  const imag = {
    height: "60vh",
    maxWidth: "60%"
    
  }
  return (
    <div style={mystyle} >
      <p>cos tam w zaleznosci jak sie zmieni</p>
      <div style={imag}><img src="http://via.placeholder.com/600x600" width="100%"></img></div>
    </div>
  );
}

export default ComponentY;
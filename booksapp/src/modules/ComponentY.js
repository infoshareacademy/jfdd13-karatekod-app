import React from 'react';


function ComponentY() {
  const mystyle = {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
   width: "100%"
    

    
  }

  const imag = {
    
    
    width: "100%"
    
  }
  return (
    <div style={mystyle} >
      <p>cos tam w zaleznosci jak sie zmieni</p>
      <div style={imag}><img src="http://via.placeholder.com/600x1300" width="60%"></img></div>
    </div>
  );
}

export default ComponentY;
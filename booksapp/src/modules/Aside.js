import React from 'react';
import '../modules/Aside.module.css';
import { Link } from 'react-router-dom'




function Aside() {
  return (
    <aside>
      <br></br>
      <br></br>
      <p>Side bar Menu</p>
      <br></br>
      <ul>
        <link to = "/x">
          <li>Menu1</li>
        </link>
        <link to = "/y">
          <li>Menu1</li>
        </link>
        <link to = "/z">
          <li>Menu1</li>
        </link>
        <link to = "/x">
          <li>Menu1</li>
        </link>
        <link to = "/y">
          <li>Menu1</li>
        </link>
        <link to = "/z">
          <li>Menu1</li>
        </link>
        <link to = "/x">
          <li>Menu1</li>
        </link>
        <link to = "/y">
          <li>Menu1</li>
        </link>
        
      </ul>
      <br></br>
      
    </aside>
  );
}

export default Aside;
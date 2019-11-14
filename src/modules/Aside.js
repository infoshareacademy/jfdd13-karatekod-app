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
        <Link to = "/x">
          <li>Menu1</li>
        </Link>
        <Link to = "/y">
          <li>Menu2</li>
        </Link>
        <Link to = "/z">
          <li>Menu3</li>
        </Link>
        <Link to = "/x">
          <li>Menu4</li>
        </Link>
        <Link to = "/y">
          <li>Menu5</li>
        </Link>
        <Link to = "/z">
          <li>Menu6</li>
        </Link>
        <Link to = "/x">
          <li>Menu7</li>
        </Link>
        <Link to = "/y">
          <li>Menu8</li>
        </Link>
        
      </ul>
      <br></br>
      
    </aside>
  );
}

export default Aside;
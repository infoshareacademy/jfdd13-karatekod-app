import React from 'react';
import './Nav.module.css';
import SearchText from "./SearchText";
import SearchChBox from "./SearchChBox"
import SearchRange from "./SearchRange"




function Nav() {
  return (
    <nav>
      <img src="http://via.placeholder.com/50x50"></img>
      <form>
        <SearchText />
        <SearchChBox />
        <SearchRange />
        <button>Search</button>
      </form>
      <h3>login/register</h3>
    </nav>
  );
}

export default Nav;
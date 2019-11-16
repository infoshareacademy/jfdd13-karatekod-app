import React, { Component } from 'react';
import './Nav.module.css';
import TextField from '@material-ui/core/TextField'







function Nav() {
  return (
    <nav>
      <img src="http://via.placeholder.com/50x50"></img>
      <form>
        {/* <SearchText />
        <SearchChBox />
        <SearchRange /> */}
        <button>Search</button>
      </form>
      <h3>login/register</h3>
    </nav>
  );
}

export default Nav;
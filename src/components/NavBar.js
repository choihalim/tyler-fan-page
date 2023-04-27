import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "300px",
  padding: "12px",
  margin: "0 18px 6px",
  background: "black",
  textDecoration: "none",
  color: "orange",
};

function NavBar() {
  return (
    <>
      <NavLink className='nav-buttons'
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Home
      </NavLink>
      <NavLink className='nav-buttons'
        to="/discography"
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Discography
      </NavLink>
      <NavLink className='nav-buttons'
        to="/schedule"
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Tour Schedule
      </NavLink>

      <NavLink
        to="/create" className='nav-buttons'
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Create
      </NavLink>
    </>
  );
}

export default NavBar;

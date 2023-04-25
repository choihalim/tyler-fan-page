import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/discography"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Discography
      </NavLink>
      <NavLink
        to="/schedule"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Tour Schedule
      </NavLink>
    </>
  );
}

export default NavBar;
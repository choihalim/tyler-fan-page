import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "200px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "orange",
};

function NavBar() {
  return (
    <>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/discography"
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Discography
      </NavLink>
      <NavLink
        to="/schedule"
        exact
        style={linkStyles}
        activeStyle={{ background: "brown" }}
      >
        Tour Schedule
      </NavLink>
    </>
  );
}

export default NavBar;
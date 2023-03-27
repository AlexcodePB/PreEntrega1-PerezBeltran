import React from "react";
import "./NavBar.css"
import AddShoppingCartIcon from "../Shop/Shop";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <p className="Logo">INELAR</p>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <AddShoppingCartIcon />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
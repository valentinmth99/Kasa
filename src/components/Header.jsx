import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="..\assets\d_logo.png" alt="logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;

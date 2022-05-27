import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="heading-1">
        <Link to="/">Pizzeria-45</Link>
      </h1>
    </header>
  );
}

export default Header;

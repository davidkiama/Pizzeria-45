import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="header">
      <h1 class="heading-1">
        <Link to="/">Pizzeria-45</Link>
      </h1>
    </header>
  );
}

export default Header;

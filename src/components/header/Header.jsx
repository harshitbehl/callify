import React from "react";

import "./Header.scss";

function Header({ logo }) {
  return (
    <header className="header">
      <h1 className="header__logo">{logo}</h1>
    </header>
  );
}

export default Header;

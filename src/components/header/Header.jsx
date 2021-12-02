import React from "react";
import { BsGithub } from "react-icons/bs";

import "./Header.scss";

function Header({ logo }) {
  return (
    <header className="header">
      <h1 className="header__logo">{logo}</h1>
      <a href="https://github.com/harshitbehl/callify">
        <BsGithub className="header__icon" />
      </a>
    </header>
  );
}

export default Header;

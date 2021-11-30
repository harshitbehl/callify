import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Made with <BsSuitHeartFill style={{ color: "#E53935" }} /> in{" "}
        <FaCanadianMapleLeaf style={{ color: "#FB8C00" }} /> Mississauga, Canada
        by Harshit Behl
      </p>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

//import { ReactComponent as Logo } from "../../assets/crown.svg";
import Logo from "../../assets/F1.svg.png";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
      </div>
    </div>
  );
}

export default Header;

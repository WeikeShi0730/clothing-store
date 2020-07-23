import React from "react";
import { Link } from "react-router-dom";

//import { ReactComponent as Logo } from "../../assets/crown.svg";
import Logo from "../../assets/F1.svg.png";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

function Header({ currentUser }) {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/shop">
          cart
        </Link>
      </div>
    </div>
  );
}

export default Header;

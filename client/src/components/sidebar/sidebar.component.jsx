import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./sidebar.styles.scss";

function Sidebar() {
  return (
    // Pass on our props
    <Menu disableAutoFocus noOverlay right width={"125px"}>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="/shop">
        SHOP
      </a>
      <a className="menu-item" href="/contact">
        CONTACT
      </a>
      <a className="menu-item" href="/signIn">
        SIGN IN
      </a>
    </Menu>
  );
}

export default Sidebar;

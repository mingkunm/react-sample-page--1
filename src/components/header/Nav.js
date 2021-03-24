import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import ContactUs from "./ContactUs";

function Nav() {
  const navStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div className="container" style={navStyle}>
      <div>
        <Logo />
        <Menu />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default Nav;

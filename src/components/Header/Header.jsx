import React from "react";
import HeaderLogoContainer from "./HeaderLogoContainer/HeaderLogoContainer";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderNav from "./HeaderNav/HeaderNav";
import "./header.scss";

const Header = () => {
  return (
    <header className={"header container"}>
      <HeaderLogoContainer />
      <HeaderNav />
      <HeaderContacts />
    </header>
  );
};

export default Header;

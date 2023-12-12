import React from "react";
import NavLink from "../../ui/NavLink/NavLink";
import Socials from "../../ui/Socials/Socials";

const HeaderContacts = () => {
  return (
    <div className="header__contacts">
      <NavLink link="tel:+75555555555" text=" +7 555 555-55-55" />
      <Socials />
    </div>
  );
};

export default HeaderContacts;

import React from "react";
import Logo from "../../ui/Logo/Logo";
import "./HeaderLogoContainer.scss";
const HeaderLogoContainer = () => {
  return (
    <div className="logo-container">
      <Logo />
      <p className="logo-container__title">
        крупный интегратор CRM <br /> в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default HeaderLogoContainer;

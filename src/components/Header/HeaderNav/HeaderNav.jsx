import React from "react";
import NavLink from "../../ui/NavLink/NavLink";

const HeaderNav = () => {
  return (
    <nav>
      <ul className={"nav"}>
        <li>
          <NavLink link="./" text="Услуги" classes={"header__link"} />
        </li>
        <li>
          <NavLink link="./" text="Виджеты" classes={"header__link"} />
        </li>
        <li>
          <NavLink link="./" text="Интеграции" classes={"header__link"} />
        </li>
        <li>
          <NavLink link="./" text="Кейсы" classes={"header__link"} />
        </li>
        <li className="desktop">
          <NavLink
            link="./"
            text="Сертификаты"
            classes={"header__link desktop"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;

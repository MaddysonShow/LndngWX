import React from "react";
import NavLink from "../ui/NavLink/NavLink";
import Socials from "../ui/Socials/Socials";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__main">
        <div className="footer__section">
          <div className="footer-item">
            <div className="footer-item__title">О компании</div>
            <ul className="footer-item__list">
              <li>
                <NavLink link="./" text="Партнёрская программа" />
              </li>
              <li>
                <NavLink link="./" text="Вакансии" />
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <div className="footer-item__title">Меню</div>
            <div className="footer__list-line">
              <ul className="footer-item__list">
                <li>
                  <NavLink link="./" text="Расчёт стоимости" />
                </li>
                <li>
                  <NavLink link="./" text="Услуги" />
                </li>
                <li>
                  <NavLink link="./" text="Виджеты" />
                </li>
                <li>
                  <NavLink link="./" text="Интеграции" />
                </li>
                <li>
                  <NavLink link="./" text="Наши клиенты" />
                </li>
              </ul>
              <ul className="footer-item__list">
                <li className="desktop">
                  <NavLink link="./" text="Кейсы" />
                </li>
                <li className="desktop">
                  <NavLink
                    link="./"
                    text="Благодарственные письма"
                    classes="desktop"
                  />
                </li>
                <li className="mobile">
                  <NavLink link="./" text="Благодарность клиентов" />
                </li>
                <li className="mobile">
                  <NavLink link="./" text="Кейсы" />
                </li>
                <li>
                  <NavLink link="./" text="Сертификаты" />
                </li>
                <li>
                  <NavLink link="./" text="Блог на Youtube" />
                </li>
                <li>
                  <NavLink link="./" text="Вопрос / Ответ" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item__title">Контакты</div>

          <ul className="footer-item__list footer-item__list--contacts">
            <li>
              <NavLink
                link="tel:+75555555555"
                text=" +7 555 555-55-55"
                classes="tel"
              />
            </li>
            <li>
              <Socials />
            </li>
            <li>
              <NavLink
                link="https://maps.google.com"
                text="Москва, Путевой проезд 3с1, к 902"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        ©WELBEX 2022. Все права защищены.
        <NavLink
          link="./"
          text="Политика конфиденциальности"
          classes="footer__copyright-link"
        />
      </div>
    </footer>
  );
};

export default Footer;

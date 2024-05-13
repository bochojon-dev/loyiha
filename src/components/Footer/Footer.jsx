import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/icons/Flogo.svg";
import { CgFacebook } from "react-icons/cg";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let data = [
    {
      id: 1,
      link: "/abaut",
      title: "About Us",
    },
    {
      id: 2,
      link: "/careers",
      title: "Careers",
    },
    {
      id: 3,
      link: "/services",
      title: "Services",
    },
    {
      id: 4,
      link: "/blog",
      title: "Blog",
    },
  ];
  let navList = data?.map((el) => (
    <li key={el.id} className="footer__list-item">
      <NavLink className="footer__list-link" to={el.link}>
        {el.title}
      </NavLink>
    </li>
  ));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__left">
            <h2 className="header__logo">Web-sayt</h2>
            <h3 className="footer__left-title">Bespoke software solutions</h3>
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <h3 className="footer__list-title">Company</h3>
            </li>
            {navList}
          </ul>
          <div className="footer__card">
            <h3 className="footer__list-title">Connect</h3>
            <a className="footer__link" href="https://github.com/ShamsiddinWeb/6_2-uyga_vaziga">
              ShamsiddinWeb
            </a><br /><br />
            <a className="footer__link" href="tel:998940337212">
              +998-94-033-72-12
            </a>
          </div>
          <div className="footer__right">
            <h3 className="footer__list-title">Join Newsletter</h3>
            <form action="">
              <input
                className="footer__inp"
                type="email"
                placeholder="Type email here"
              />
            </form>
            <button className="footer__btn">Subscribe</button>
          </div>
        </div>
        <div className="footer__end">
          <p className="footer__end-text">© All rights reserved – Finsweet</p>
          <div className="footer__end-card">
            <p className="footer__end-text">Privacy Policy</p>
            <p className="footer__end-text">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

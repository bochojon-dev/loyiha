import React, { useState } from "react";
import "./Header.css";
import { Router, Route, NavLink, Link, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Blog from "../../pages/Blog/Blog";
import Product from "../../pages/Product/Product";
import Careers from "../../pages/Careers/Careers";

const Header = () => {
  const [toogle, setToggle] = useState(false);
  let data = [
    ,
    {
      id: 1,
      link: "/abaut",
      title: "Rus tili",
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
    {
      id: 5,
      link: "/Product",
      title: "Product",
    },
  ];
  let navList = data?.map((el) => (
    <li key={el.id} className="header__list-item">
      <NavLink className="header__list-link" to={el.link}>
        {el.title}
      </NavLink>
    </li>
  ));
  return (
    <div className="projct">
      <header className={`header ${toogle ? "open" : ""}`}>
        <div className="container">
          <div className="header__start">
            {/* <Link to={"/"}>
              <h2 className="">
                Web-sayt
              </h2>
            </Link> */}
            <nav className="header__nav">
              <ul className="header__list">{navList}</ul>
              <button className="header__btn">Clone project</button>
            </nav>
            <div className="header__menu-burgers">
              <button
                className="header__menu"
                id="menu-burger"
                onClick={() => setToggle(!toogle)}
              >
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abaut" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
};

export default Header;

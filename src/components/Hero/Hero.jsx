import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/HeaderLogos.svg";
import bg from "../../assets/images/Image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__start">
          <h1 className="hero__title">
            Ingliz va Rus tillarini bizdan o'rganing!
          </h1>
          <p className="hero__text">
            Web-saytimiz orqali, horijiy tillar haqida batafsil tushunchalarga
            ega bo'lishingiz, bu yo'nalish qanday imkoniyatlarga ega ekanligi
            haqida bilib olishingiz mumkin.
          </p>
          {/* <div className="hero__group">
            <button className="hero__btn">
              <Link className="hero__linksss" to={"/services"}>
                See our Services{" "}
              </Link>
            </button>
            <p>
              <Link className="hero__link" to={"/services"}>
                See All Services{" "}
              </Link>
            </p>
          </div>
          <span className="hero__span">Worked with 100+ Companies</span>
          <br />
          <br />
          <img className="hero__logo" src={logo} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

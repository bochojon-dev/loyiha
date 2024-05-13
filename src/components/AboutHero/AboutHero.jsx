import React from "react";
import "./main.css";
import wrapperImg from "../../assets/images/images.png";

const AboutHero = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__start">
          <div className="wrapper__card">
            <h2 className="wrapper__title">
              Biz bilan tillarni uydan turgan holatda onlayn o'rganish mumkin
            </h2>
            <p className="wrapper__text">
              Web-saytimiz orqali, horijiy tillar haqida batafsil tushunchalarga
              ega bo'lishingiz, bu yo'nalish qanday imkoniyatlarga ega ekanligi
              haqida bilib olishingiz mumkin.
            </p>
            <button className="wrapper__btn">Work With Us</button>
          </div>
          <img className="img" src={wrapperImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

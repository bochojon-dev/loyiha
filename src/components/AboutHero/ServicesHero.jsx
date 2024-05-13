import React from "react";
import "./main.css";
import wrapperImg from "../../assets/images/images3.png";

const ServicesHero = () => {
  let data = [
    {
      id: 1,
      img: (
        <iframe
          src="https://www.youtube.com/embed/IZDV9YHDF58?list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe"
          title="React JS, react haqida, 1-dars umumiy ma&#39;lumotlar"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "IELTS, ielts haqida, 1-dars umumiy ma'lumotlar ",
      text: "IELTS 1-dars umumiy ma'lumotlar, IELTS haqida, unga kirish",
    },
    {
      id: 2,
      img: (
        <iframe
          src="https://www.youtube.com/embed/6NbczxUJFx8?list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe"
          title="IELTS 2-dars, speaking"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "IELTS 2-dars, speaking ",
      text: "Bu kurs o'z ichiga IELTS haqida ko'plab loyihlarni o'z ichiga olgan. Undan tashqari ko'plab mock exam lar bo'ladi",
    },
    {
      id: 3,
      img: (
        <iframe
          src="https://www.youtube.com/embed/8j2xcg3JB1M?list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe"
          title="IELTS 3-dars, Listening"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "IELTS 3-dars, Listening",
      text: "Birinchi mock exam!",
    },
    {
      id: 4,
      img: (
        <iframe
          src="https://www.youtube.com/embed/wPqzP-5lAgk?list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe"
          title="IELTS 4-dars, writing"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "IELTS 4-dars, writing",
      text: "Bilimlaringizni pre exam larda sinab koring ",
    },
    {
      id: 5,
      img: (
        <iframe
          src="https://www.youtube.com/embed/UkLPdU2gUPM?list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe"
          title="React JS 5-dars, React Props haqida."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "React JS 5-dars, React Props haqida.",
      text: "Componentlar yaratish va ularni ishlatish haqida",
    },
    {
      id: 6,
      img: (
        <iframe
          src="https://www.youtube.com/embed/90lKjD7U1t8?list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe"
          title="IELTS 6-dars, Reading"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "IELTS 6-dars, Reading",
      text: " Reading haqida.",
    },
  ];
  let list = data?.map((el) => (
    <li key={el.id} className="experience__list-item">
      <p className="video">{el.img}</p>
      <h4 className="experience__list-title">{el.title}</h4>
      <p className="experience__list-text">{el.text}</p>
    </li>
  ));
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__start">
          <div className="wrapper__card">
            <h2 className="wrapper__title">
              Sizda uydan chiqmay ishlah imkoniyatlari ham mavjud
            </h2>
            <p className="wrapper__text">
              Web-saytimiz orqali, horijiy haqida batafsil tushunchalarga ega
              bo'lishingiz, bu yo'nalish qanday imkoniyatlarga ega ekanligi
              haqida bilib olishingiz mumkin.
            </p>
            <button className="wrapper__btn">View Positions</button>
          </div>
          <img className="img" src={wrapperImg} alt="" />
        </div>
        <div className="experience__card">
          <h3 className="experience__title">Ingliz tili kurslari TOEFL</h3>
        </div>
        <ul className="experience__list">{list}</ul>
        <button className="exp__btn">
          <a href="https://www.youtube.com/watch?v=90lKjD7U1t8&list=PL2MpNQ8oxLThVkJF4SqLJmYPVVzThNjhe&index=6">
            Qolgan videolarni ko'rish uchun ...
          </a>
        </button>
      </div>
    </section>
  );
};

export default ServicesHero;

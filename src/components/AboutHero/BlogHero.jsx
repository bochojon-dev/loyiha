import React from "react";
import "../Experience/Experience.css";
import wrapperImg from "../../assets/images/Images4.png";
import wrappericon from "../../assets/icons/Image.svg";
import { BsArrowRight } from "react-icons/bs";

const BlogHero = () => {
  let data = [
    {
      id: 1,
      img: (
        <iframe
          src="https://www.youtube.com/embed/uUULF8ikQoY?list=PLHNaMQIyrDHOZhHnc2UdQEOHrb1xM7HaF"
          title="Rus tilini o&#39;rganamiz 1-qism"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tilini o'rganamiz 1-qism",
      text: "Bu videoda sizlar bilan rus tili tarixi va hozirgi rivojlanishi haqida dars olib boramiz.",
    },
    {
      id: 2,
      img: (
        <iframe
          src="https://www.youtube.com/embed/b8Fk2u_C7i8?list=PLHNaMQIyrDHOZhHnc2UdQEOHrb1xM7HaF"
          title="Rus tilini o&#39;rganamiz 3-Dars"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tilini o'rganamiz 3-Dars",
      text: "Bu videoda sizlar bilan turli mashqlar, qiziqarli oyinlar haqida dars olib boramiz.",
    },
    {
      id: 3,
      img: (
        <iframe
          src="https://www.youtube.com/embed/GVKi9E7DjAs?list=PLHNaMQIyrDHOZhHnc2UdQEOHrb1xM7HaF"
          title="Rus tilni o&#39;rganamiz 2-Dars"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tilini o'rganamiz 2-Dars",
      text: "Bu videoda sizlar bilan yangi sozlar va ayrim grammatik qoidalar haqida dars olib boramiz.",
    },
    {
      id: 4,
      img: (
        <iframe
          src="https://www.youtube.com/embed/GBvdEBdiWhQ?list=PLHNaMQIyrDHOZhHnc2UdQEOHrb1xM7HaF"
          title="Yangi sozlar"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "CSS Cheatsheet",
      text: "Ushbu Videoimizda rus tilidagi bilimlarimizni bir marta qaytarib olish orqali mustahkamlaymiz.",
    },
    {
      id: 5,
      img: (
        <iframe
          src="https://www.youtube.com/embed/8SJc1OHQ01Q?list=PLHNaMQIyrDHOZhHnc2UdQEOHrb1xM7HaF"
          title="Ingliz tiliga kirish"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Ingliz tiliga kirish",
      text: "Ushbu Videomizda Ingliz tilidagi bilimlarimizni bir marta qaytarib olish orqali mustahkamlaymiz.",
    },
    {
      id: 6,
      img: (
        <iframe
          src="https://www.youtube.com/embed/ttbt7Y7vxQc?list=PLHNaMQIyrDHOZhHnc2UdQEOHrb1xM7HaF"
          title="Murphy kitobidan turli topshiriqlar bajaramiz."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Murphy kitobidan turli topshiriqlar bajaramiz.",
      text: "Ushbu Videomizda Ingliz tillidagi bilimlarimizni bir marta qaytarib olish orqali mustahkamlaymiz.",
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
    <section className="experience">
      <div className="container">
        <div className="experience__start">
          <div className="experience__card">
            <h3 className="experience__title">Ingliz tili kurslari</h3>
          </div>
          <ul className="experience__list">{list}</ul>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

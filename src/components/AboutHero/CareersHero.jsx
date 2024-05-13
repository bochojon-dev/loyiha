import React from "react";
import "./main.css";
import wrapperImg from "../../assets/images/images2.png";

const CareersHero = () => {
  let data = [
    {
      id: 1,
      img: (
        <iframe
          src="https://www.youtube.com/embed/zJuDsji3IbE?list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
          title="001.  Kursga kirish | Ingliz tili O&#39;zbekcha"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "001. Kursga kirish ",
      text: "Bu kurs o'z ichiga Ingliz tilidan ko'plab mavzularni o'z ichiga olgan. Undan tashqari ko'plab mavzuga oid quiz lar boladi",
    },
    {
      id: 2,
      img: (
        <iframe
          src="https://www.youtube.com/embed/1Jy8UWjQ4JE?list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
          title="002.  Bizga nima kerak bo&#39;ladi ?  | Ingliz tili darslari | O&#39;zbek tilida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "002. Bizga nima kerak bo'ladi ? ",
      text: "Bu kurs o'z ichiga Ingliz tilidan ko'plab loyihlarni o'z ichiga olgan. Undan tashqari ko'plab test va oyinlarni ichiga olgan",
    },
    {
      id: 3,
      img: (
        <iframe
          src="https://www.youtube.com/embed/E7_qUYYXazU?list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
          title="003.  Mavzuga oid test ishlash |  | Ingliz tili darslari | O&#39;zbek tilida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "003. Yangi sozlarni takrorlash",
      text: "Bu kurs o'z ichiga Ingliz tilidan ko'plab loyihlarni o'z ichiga olgan. Undan tashqari ko'plab test va oyinlarni ichiga olgan",
    },
    {
      id: 4,
      img: (
        <iframe
          src="https://www.youtube.com/embed/bPzy0_156Ws?list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
          title="004.  Kurs fayllar  | Ingliz tili darslari | O&#39;zbek tilida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "004. Kurs fayllar",
      text: "Bu kurs o'z ichiga Ingliz tilidan ko'plab loyihlarni o'z ichiga olgan. Undan tashqari ko'plab test va oyinlarni ichiga olgan",
    },
    {
      id: 5,
      img: (
        <iframe
          src="https://www.youtube.com/embed/Z4E2xjTCyjM?list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
          title="005.  Murphy book  | Ingliz tili darslari | O&#39;zbek tilida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "005.  Murphy book",
      text: "Bu kurs o'z ichiga Ingliz tilidan ko'plab loyihlarni o'z ichiga olgan. Undan tashqari ko'plab test va oyinlarni ichiga olgan",
    },
    {
      id: 6,
      img: (
        <iframe
          src="https://www.youtube.com/embed/-Z1kqQp85n0?list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
          title="006. TestMaster book  | Ingliz tili darslari | O&#39;zbek tilida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "006. TestMaster book ",
      text: "Bu kurs o'z ichiga Ingliz tilidan ko'plab loyihlarni o'z ichiga olgan. Undan tashqari ko'plab test va oyinlarni ichiga olgan",
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
              Ahil jamoa bilan ishlash imkoniyati
            </h2>
            <p className="wrapper__text">
              Web-saytimiz orqali, horijiy tillar haqida batafsil tushunchalarga
              ega bo'lishingiz, bu yo'nalish qanday imkoniyatlarga ega ekanligi
              haqida bilib olishingiz mumkin.
            </p>
            <button className="wrapper__btn">View Positions</button>
          </div>
          <img className="img" src={wrapperImg} alt="" />
        </div>
        <div className="experience__card">
          <h3 className="experience__title">Ingliz tili kurslari</h3>
        </div>
        <ul className="experience__list">{list}</ul>
        <button className="exp__btn">
          <a href="https://www.youtube.com/watch?v=-Z1kqQp85n0&list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u&index=6">
            Qolgan videolarni ko'rish uchun...
          </a>
        </button>
      </div>
    </section>
  );
};

export default CareersHero;

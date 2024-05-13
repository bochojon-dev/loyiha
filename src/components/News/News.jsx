import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

const News = () => {
  let data = [
    {
      id: 1,
      img: (
        <iframe
          src="https://www.youtube.com/embed/WXDDLyTI2Dk?list=PLt6FsEJVwHDKWSZ5ojPogywdGCINJ1nC1"
          title="Dasturlash o&#39;zi nima?"
          frameborder="0"
        ></iframe>
      ),
      title: "Horijiy tillar orqali qanday  yutuqlarga erishish mumkin?",
      text: "Najot Ta'lim",
      link: "Videolarga o'tish",
    },
    {
      id: 2,
      img: (
        <iframe
          src="https://www.youtube.com/embed/cQcmHdWzeOA?list=PLt6FsEJVwHDKWSZ5ojPogywdGCINJ1nC1"
          title="Dasturlashning qanday sohalari mavjud?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Qanday horijiy sertifikatlar mavjud?",
      text: "Najot Ta'lim",
      link: "Videolarga o'tish",
    },
    {
      id: 3,
      img: (
        <iframe
          src="https://www.youtube.com/embed/Hwq8RLP3yc8?list=PLt6FsEJVwHDKWSZ5ojPogywdGCINJ1nC1"
          title="Qanday yuqori natijaga erishish mumkin?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Xalqaro darajadagi sertifikatlar?!",
      text: "Najot Ta'lim",
      link: "Videolarga o'tish",
    },
    {
      id: 4,
      img: (
        <iframe
          src="https://www.youtube.com/embed/P7HPe_wHnM8?list=PLt6FsEJVwHDKWSZ5ojPogywdGCINJ1nC1"
          title="Ingliz tilini o&#39;rganish uchun manbalar"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Ingliz tilini o'rganish uchun manbalar",
      text: "Najot Ta'lim",
      link: "Videolarga o'tish",
    },
    {
      id: 5,
      img: (
        <iframe
          src="https://www.youtube.com/embed/fYcPgEQqtWg"
          title="Qancha vaqtda yuqori darajali sertifikatlar olish mumkin?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Qancha vaqtda yuqori darajali sertifikatlar olish mumkin?",
      text: "Najot Ta'lim",
      link: "Videolarga o'tish",
    },
    {
      id: 6,
      img: (
        <iframe
          src="https://www.youtube.com/embed/p144HIhX0CQ"
          title="Biz bilan qanday nufuzli ishlarga kirish mumkin?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Biz bilan qanday nufuzli ishlarga kirish mumkin?",
      text: "Najot Ta'lim",
      link: "Videolarga o'tish",
    },
  ];
  let newsData = data?.map((e) => (
    <li key={e.id} className="news__list-item">
      {/* <img src={e.img} alt="" /> */}
      <p className="video">{e.img}</p>
      <h3 className="news__list-title">{e.title}</h3>
      <p className="news__list-text">{e.text}</p>
      <a
        className="news__list-link"
        href="https://www.youtube.com/watch?v=cQcmHdWzeOA&list=PLt6FsEJVwHDKWSZ5ojPogywdGCINJ1nC1&index=2"
      >
        {e.link} <HiOutlineArrowLongRight />
      </a>
    </li>
  ));
  return (
    <section className="news">
      <div className="container">
        <div className="news__start">
          <h2 className="news__title">
            Bizning darslarimiz haqida qisqacha malumotlar
          </h2>
          <ul className="news__list">{newsData}</ul>
        </div>
      </div>
    </section>
  );
};

export default News;

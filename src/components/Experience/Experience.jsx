import React from "react";
import "./Experience.css";

const Experience = () => {
  let data = [
    {
      id: 1,
      img: (
        <iframe
          src="https://www.youtube.com/embed/9dUhZq9dkHM?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 0. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tili | 0. Kurs haqida",
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 2,
      img: (
        <iframe
          src="https://www.youtube.com/embed/E9OKpacyUSc?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 1. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tili | 1. Kurs haqida",
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 3,
      img: (
        <iframe
          src="https://www.youtube.com/embed/_j7yneg6if0?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 2. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tili | 2. Kurs haqida",
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 4,
      img: (
        <iframe
          src="https://www.youtube.com/embed/M6AS_IdZK7s?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 3. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tili | 3. Kurs haqida",
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 5,
      img: (
        <iframe
          src="https://www.youtube.com/embed/1Bmqo8tsOq8?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 0. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: `Rus tili | 4. Kurs haqida`,
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 6,
      img: (
        <iframe
          src="https://www.youtube.com/embed/jMermL9QA48?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 5. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tili | 5. Kurs haqida",
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 7,
      img: (
        <iframe
          src="https://www.youtube.com/embed/dgcyvjQiJnQ?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 6. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: "Rus tili | 6. Kurs haqida",
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 8,
      img: (
        <iframe
          src="https://www.youtube.com/embed/kc6Nv56oeX4?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 7. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: `Rus tili | 7. Kurs haqida`,
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 9,
      img: (
        <iframe
          src="https://www.youtube.com/embed/ifw_VNZWW1I?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 8. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: `Rus tili | 8. Kurs haqida`,
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 10,
      img: (
        <iframe
          src="https://www.youtube.com/embed/o2ghjG7a5ik?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="HTMLda dasturlash | 9. Formatting (Formatlash)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: `Rus tili | 9. Kurs haqida`,
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 11,
      img: (
        <iframe
          src="https://www.youtube.com/embed/OnE2w9X5jCU?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 10. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: `Rus tili | 10. Kurs haqida`,
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
    },
    {
      id: 12,
      img: (
        <iframe
          src="https://www.youtube.com/embed/ifw_VNZWW1I?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS"
          title="Rus tili | 11. Kurs haqida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      title: `Rus tili | 11. Kurs haqida`,
      text: "Bu kurs davomida sizlar Rus oliygohlariga kirish uchun kerak bo'ladigan barcha kerakli bilimlarga ega bo'lasizlar.",
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
            <h3 className="experience__title">Rus tili kurslari</h3>
          </div>
          <ul className="experience__list">{list}</ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

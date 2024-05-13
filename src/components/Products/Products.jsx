import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { BsCart3 } from "react-icons/bs";
import "./loading.css";

function Products() {
  const API__URL = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get(API__URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, []);
  console.log(data);
  let cards = data?.slice(0, 9).map((pro) => (
    <li key={pro.id} className="products__list-item">
      <button className="btn">yangi</button>
      <div className="imges">
        <img className="products__list-img" src={pro.image} alt="" />
      </div>
      <h5 className="products__list-title">{pro.title}</h5>
      <p className="products__list-text">{pro.description}</p>
      <img src="" alt="" /> <span className="span">({pro.rating.rate})</span>
      <p className="category">By: {pro.category} <span>${pro.price} </span></p>
      <div className="products__list-card">
        <button className="products__list-btn">
          savatga qo'shish
        </button>
      </div>
    </li>
  ));
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="products__start">
            <div className="products__card">
              <h3 className="products__title">Products</h3>
            </div>
            {loading ? (
              <ul className="loading">
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
              </ul>
            ) : (
              <></>
            )}
            <ul className="products__list">{cards}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;

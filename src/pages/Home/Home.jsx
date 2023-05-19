import "./Home.scss";

import shoppingBag from "../../assets/images/shopping-bag-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Product from "../Product";
import Status from "../../assets/parts/Status";

import { RiSearch2Line } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import Navbar from "../../assets/parts/Navbar/Navbar";

const Home = ({ PRODUCTS, filterIconsArr }) => {
  return (
    <div id="home-page-container">
      <Status />

      <div id="home-top-options-container">
        <RiSearch2Line className="home-top-icons" />
        <p id="home-title-p">
          MAKE HOME <br /> <span id="home-title-span">BEAUTIFUL</span>{" "}
        </p>
        <Link to="/cart">
          <BsCart2 className="home-top-icons" id="home-cart-icon" />
        </Link>
      </div>
      <ul id="filter-ul">
        {filterIconsArr.map((filter, idx) => {
          return (
            <li key={idx}>
              <div className="icon-image-container">
                <img src={filter.icon} alt="" />
              </div>
              <span>{filter.name}</span>
            </li>
          );
        })}
      </ul>
      <div id="products-container">
        <ul>
          {PRODUCTS.map((product, idx) => {
            return (
              <li key={idx}>
                <div className="product-image-container">
                  <Link to={`/product/${product.product_id}`}>
                    <img
                      className="product-main-image"
                      src={product.main_image}
                    ></img>
                  </Link>
                  <img className="shopping-bag-icon" src={shoppingBag}></img>
                </div>
                <span className="product-name">{product.name}</span> <br />
                <span className="product-price">
                  $ {product.price.toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <Navbar />
      <div className="indicator"></div>
    </div>
  );
};

export default Home;

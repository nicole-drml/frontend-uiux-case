import Status from "../../assets/parts/Status";
import { MdArrowBackIos } from "react-icons/md";
import { SlClose } from "react-icons/sl";

import "./Favorite.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../assets/parts/Navbar/Navbar";
import Array from "../../components/Array";

const Favorite = (PRODUCTS) => {
  const products = PRODUCTS.PRODUCTS;
  const [favoritesArr, setFavoritesArr] = useState([]);

  useEffect(() => {
    const favorites = products.filter((product) => product.favorited === true);
    setFavoritesArr(favorites);
  }, [products]);

  return (
    <div id="favorite-page-page">
      <div id="favorite-page-container">
        <div className="array-pages-container">
          <Status />
          <div className="array-title-and-button">
            <p className="array-page-title">Favorites</p>
          </div>
        </div>
        <ul id="products-in-favorite" className="products-array-container">
          {favoritesArr.map((favorites) => {
            return (
              <li key={favorites.name}>
                <Link to={`/product/${favorites.product_id}`}>
                  <img
                    className="favorite-product-image"
                    src={favorites.main_image}
                  ></img>
                </Link>

                <Link to={`/product/${favorites.product_id}`}>

                  <div className="li-product-center-info">
                    <span className="product-name">{favorites.name}</span>
                    <br />
                    <span className="product-price">
                      $ {favorites.price.toFixed(2)}
                    </span>
                  </div>
                </Link>
                <div className="li-product-icons-container">
                  <SlClose />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button id="add-all-to-cart" className="main">
        Add all to my cart
      </button>
      <Navbar />
      <div className="indicator"></div>
    </div>
  );
};

export default Favorite;

import Status from "../../assets/parts/Status";
import { MdArrowBackIos } from "react-icons/md";
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
            <Link to="/home">
              <MdArrowBackIos />
            </Link>
            <p className="array-page-title">Favorites</p>
          </div>
        </div>
        <ul id="products-in-favorite" className="products-array-container">
          {favoritesArr.map((favorites) => {
            return (
              <Link to={`/product/${favorites.product_id}`}>
                <li key={favorites.name}>
                  <img
                    className="favorite-product-image"
                    src={favorites.main_image}
                  ></img>
                  <span>{favorites.name}</span>
                  <span className="product-price">
                    $ {favorites.price.toFixed(2)}
                  </span>
                </li>
              </Link>
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

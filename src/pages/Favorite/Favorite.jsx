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
    <div id="favorite-page-container">
      <Array 
      page="Favorites"
      />
      <ul>
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
      <Navbar />
    </div>
  );
};

export default Favorite;

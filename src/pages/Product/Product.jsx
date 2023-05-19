import { useParams, Link } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

// import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../assets/parts/Navbar/Navbar";

import "./Product.scss";
import Status from "../../assets/parts/Status";

import { IoIosArrowBack } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";

const Product = ({
  PRODUCTS,
  favoritesArr,
  setFavoritesArr,
  favoriteStatus,
  setFavoriteStatus,
  inCartStatus,
}) => {
  const productId = useParams();

  let product = PRODUCTS.find(
    (product) => product.product_id === productId.product_id
  );

  const [disableIncBtn, setDisableIncBtn] = useState(false);
  const [disableDecBtn, setDisableDecBtn] = useState(false);

  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 1 });

  function increment() {
    if (state.count < product.stock) {
      dispatch({ type: ACTIONS.INCREMENT });
    }
  }

  function decrement() {
    if (state.count > 1) {
      dispatch({ type: ACTIONS.DECREMENT });
    }
  }

  const [favorite, setFavorite] = useState(false);

  function checkIfFavorite() {
    if (product.favorited == true) {
      setFavorite(true);
    }
  }
  useEffect(() => {
    if (state.count == product.stock) {
      setDisableIncBtn(true);
    } else {
      setDisableIncBtn(false);
    }
    if (state.count == 1) {
      setDisableDecBtn(true);
    } else {
      setDisableDecBtn(false);
    }
  }, [state.count]);

  useEffect(() => {
    checkIfFavorite();

    setDisableDecBtn(true);
  }, []);

  const toggleFavorite = () => {
    product.favorited = !product.favorited;
    setFavorite(!favorite);

    console.log("favorite stat", favoriteStatus);
    console.log("favoriteyproyyy", product);
    console.log("fav fav arr", favoritesArr);
  };

  const deleteFavorite = () => {
    product.favorited = false;
    setFavorite(false);

    console.log("unfavorite stat", favoriteStatus);
    console.log("unfavoriteyproyyy", product);
  };

  console.log("PRODUCTS", PRODUCTS);
  console.log("FAV fav arr", favoritesArr);

  const addtoCart = () => {
    product.carted = true;
  };
  return (
    <div id="product-page-container">
      <Status />
      <Link to={"/home"} id="product-back-arrow">
        <IoIosArrowBack />
      </Link>
      <img className="product-page-image" src={product.main_image}></img>
      <div id="product-details-container">
        <span id="product-name-span">{product.name}</span>
        <br />
        <div id="price-and-reducer-container">
          <span id="product-price-span">$ {product.price.toFixed(2)}</span>
          <div id="quantity-add-to-cart-container">
            <button
              className={`increase-quantity-btn ${
                disableIncBtn ? "disabled-btn" : ""
              }`}
              onClick={increment}
            >
            <CgMathPlus />
            </button>
            <span>{state.count}</span>
            <button
              className={`decrease-quantity-btn ${
                disableDecBtn ? "disabled-btn" : ""
              }`}
              onClick={decrement}
            >
              < CgMathMinus/>
            </button>
          </div>
        </div>
        <div id="ratings-and-favorite">
            <AiFillStar className="star-icon" />
          <span id="rating-average-span">{product.rating}</span>
          <span id="review-count-span">({product.review_count} reviews)</span>
        </div>

        <p id="product-description">{product.description}</p>

        <div id="product-bottom-options">
          {/* <VscBookmark /> */}
          <BsBookmark id="product-favorite-button" className={`${favorite ? "favorite" : "not-favorite"}`}
          onClick={toggleFavorite}
          />
          <button id="product-add-to-cart-button" onClick={addtoCart}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="indicator"></div>
    </div>
  );
};

export default Product;

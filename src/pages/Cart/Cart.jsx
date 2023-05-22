import "./Cart.scss";
import Status from "../../assets/parts/Status";

import { useEffect, useState, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../assets/parts/Navbar/Navbar";
import Array from "../../components/Array";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { SlClose } from "react-icons/sl";

const Cart = (props) => {
  const productId = "";

  const products = props.PRODUCTS;

  let product = products.find(
    (product) => product.product_id === productId.product_id
  );
  const [cartedArr, setCartedArr] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const carted = products.filter((product) => product.carted === true);
    setCartedArr(carted);
  }, [products]);

  // cart increase decrease
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

  useEffect(() => {
    let total = 0;
    cartedArr.forEach((carted) => {
      total += carted.price;
    });
    console.log("cart", cartedArr);
    setCartTotal((cartTotal) => (cartTotal += total));
  }, [cartedArr]);

  const [promoCode, setPromoCode] = useState("");
  const [codeInvalid, setcodeInvalid] = useState(false);
  const [discounted, setDiscounted] = useState(false);

  const handleInputChange = (event) => {
    setPromoCode(event.target.value);
    setcodeInvalid(false);
  };

  //   let discountPercentage = 0;
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const enterPromoCode = () => {
    setPromoCode(promoCode);

    const promoString = promoCode.slice(0, 8);

    if (promoString === "DISCOUNT") {
      const promoDigits = promoCode.match(/\d+/g);
      const discountPercentageArr = promoDigits.map(Number);
      setDiscountPercentage(discountPercentageArr[0]);
      //   discountPercentage = discountPercentageArr[0];
    } else {
      setcodeInvalid(true);
    }
  };

  useEffect(() => {
    console.log("discountPercentage", discountPercentage);

    if (discountPercentage <= 100 && discountPercentage > 0) {
      setDiscounted(true);
      const decimal = discountPercentage / 100;
      setCartTotal((prevCartTotal) => prevCartTotal - cartTotal * decimal);

      console.log("decimal", decimal);
      console.log("cartTotal", cartTotal);
    } else if ((discountPercentage >= 100) | (discountPercentage < 0)) {
      setcodeInvalid(true);
    }
    console.log("discounted", discounted);
  }, [discountPercentage]);

  return (
    <div id="cart-page-container">
      <div className="array-pages-container">
        <Status />

        <div className="array-title-and-button">
          <Link to="/home">
            <MdArrowBackIos />
          </Link>
          <p className="array-page-title">Cart</p>
        </div>
      </div>
      <ul id="products-in-cart" className="products-array-container">
        {props.cartArr.map((carted) => {
          return (
            <li key={carted.name}>
              <Link to={`/product/${carted.product_id}`} key={carted.name}>
                <img
                  className="favorite-product-image"
                  src={carted.main_image}
                ></img>
              </Link>
              <div className="li-product-center-info">
                {" "}
                <Link to={`/product/${carted.product_id}`} key={carted.name}>
                  <span className="product-name">{carted.name}</span>
                  <br />
                  <span className="product-price">
                    $ {carted.price.toFixed(2)}
                  </span>
                </Link>
                <div className="quantity-add-to-cart-container">
                  <button
                    className={`increase-quantity-btn ${
                      disableIncBtn ? "disabled-btn" : ""
                    }`}
                    onClick={increment}
                  >
                    +
                  </button>
                  <span>{state.count}</span>
                  <button
                    className={`decrease-quantity-btn ${
                      disableDecBtn ? "disabled-btn" : ""
                    }`}
                    onClick={decrement}
                  >
                    -
                  </button>
                </div>
              </div>
                <div className="li-product-icons-container">
                  <SlClose />
                </div>
            </li>
          );
        })}
      </ul>

      <div className="cart-bottom-logic-container">
        {discounted ? (
          <div className="discounted-div">
            <h3>Congrats! You saved {discountPercentage}%</h3>
          </div>
        ) : (
          <div id="not-yet-discounted-div">
            <input
              type="text"
              placeholder="Enter your promo code"
              value={promoCode}
              onChange={handleInputChange}
            />
            <MdArrowForwardIos onClick={enterPromoCode} />
          </div>
        )}
        {codeInvalid && <h1 id="invalid-code-h1">invalid code</h1>}
        <div className="total-container">
          <span className="total-label-span">Total</span>
          <span className="total-span">$ {cartTotal.toFixed(2)}</span>
        </div>
        <button className="main-button">
          <span>Checkout</span>{" "}
        </button>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default Cart;

import Boarding from "./pages/Boarding";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import blackLamp from "./assets/images/product-black-lamp-1.avif";
import blackTable from "./assets/images/product-black-table-1.avif";
import blackChair from "./assets/images/product-black-armchair-1.avif";
import blackBed from "./assets/images/product-black-bed-1.avif";
import whiteChair from "./assets/images/product-white-chair-1.avif";
import whiteTable from "./assets/images/product-white-table-1.avif";
import whiteArmChair from "./assets/images/product-white-armchair-1.jpeg";
import popularIcon from "./assets/images/filter-star.png";
import chairIcon from "./assets/images/filter-chair.png";
import tableIcon from "./assets/images/filter-table.png";
import armchairIcon from "./assets/images/filter-armchair.png";
import bedIcon from "./assets/images/filter-bed.png";
import Favorite from "./pages/Favorite/Favorite";
import LogIn from "./pages/Login";
const App = () => {
  const [PRODUCTS, setPRODUCTS] = useState([
    {
      type: "chair",
      name: "Black Simple Lamp",
      price: 12.0,
      main_image: blackLamp,
      // "product_images":[<url>, <url>, <url>], "priority":1,
      product_id: "00000001",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quo aut voluptatibus commodi ad porro consequuntur odit ullam consectetur suscipit corporis ab ex expedita laboriosam officiis, ipsa aspernatur eaque obcaecati?",
      rating: 4.75,
      review_count: 50,
      stock: 5,
    },
    {
      type: "table",
      name: "Black Simple Table",
      price: 12.61,
      main_image: blackTable,
      // "product_images":[<url>, <url>, <url>], "priority":1,
      product_id: "00000002",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga minus error nam possimus rerum, blanditiis et voluptas aperiam amet necessitatibus!",
      rating: 4.1,
      review_count: 10,
      stock: 50,
    },
    {
      type: "armchair",
      name: "Black Simple Armchair",
      price: 1.61,
      main_image: blackChair,
      // "product_images":[<url>, <url>, <url>], "priority":0,
      product_id: "00000003",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, et.",
      rating: 1.1,
      review_count: 100,
      stock: 0,
    },
    {
      type: "bed",
      name: "Black Simple Bed",
      price: 2.61,
      main_image: blackBed,
      // "product_images":[<url>, <url>, <url>], "priority":10,
      product_id: "00000004",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae beatae veritatis laborum quas sequi laboriosam perspiciatis adipisci? Magni dignissimos alias, a architecto quasi voluptate sapiente vel labore quod?",
      rating: 0,
      review_count: 0,
      stock: 2,
    },
    {
      type: "chair",
      name: "White Simple Chair",
      price: 99.0,
      main_image: whiteChair,
      // "product_images":[<url>, <url>, <url>], "priority":12,
      product_id: "00000005",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos, atque consectetur nulla culpa, animi ab recusandae temporibus sequi consequuntur enim quasi modi, possimus facere corporis ullam et. Aperiam at enim laudantium perferendis!",
      rating: 0,
      review_count: 0,
      stock: 0,
    },
    {
      type: "table",
      name: "White Simple Table",
      price: 80.0,
      main_image: whiteTable,
      // "product_images":[<url>, <url>, <url>], "priority":0,
      product_id: "00000006",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia fugit debitis quae quidem! Animi, tenetur?",
      rating: 5.0,
      review_count: 1000,
      stock: 2,
    },
    {
      type: "armchair",
      name: "White Simple Armchair",
      price: 1000000.5,
      main_image: whiteArmChair,
      // "product_images":[<url>, <url>, <url>], "priority":0,
      product_id: "00000007",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore numquam suscipit animi obcaecati a! Earum explicabo necessitatibus labore sint itaque, similique autem nulla tempore ratione eaque!",
      rating: 3.0,
      review_count: 1,
      stock: 1,
    },
  ]);

  const filterIconsArr = [
    {
      name: "Popular",
      icon: popularIcon,
    },
    {
      name: "Chair",
      icon: chairIcon,
    },
    {
      name: "Table",
      icon: tableIcon,
    },
    {
      name: "Armchair",
      icon: armchairIcon,
    },
    {
      name: "Bed",
      icon: bedIcon,
    },
  ];

  const [favoritesArr, setFavoritesArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [favoriteStatus, setFavoriteStatus] = useState({ favorited: false });
  const [inCartStatus, setInCartStatus] = useState({ carted: false });

  PRODUCTS.forEach((product) => {
    // const favoriteStatus = {'favorited': false};

    Object.assign(product, favoriteStatus);
    Object.assign(product, inCartStatus);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Boarding />}></Route>
        <Route path="/login" element={<LogIn />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/home"
          element={
            <Home
              PRODUCTS={PRODUCTS}
              filterIconsArr={filterIconsArr}
              cartArr={cartArr}
              setCartArr={setCartArr}
              // inCartStatus={inCartStatus}
              // setInCartStatus={setInCartStatus}
            />
          }
        ></Route>

        <Route
          path="/product/:product_id"
          element={
            <Product
              PRODUCTS={PRODUCTS}
              favoritesArr={favoritesArr}
              setFavoritesArr={setFavoritesArr}
              // favoriteStatus={favoriteStatus}
              // setFavoriteStatus={setFavoriteStatus}
              // inCartStatus={inCartStatus}
              // setInCartStatus={setInCartStatus}
            />
          }
        ></Route>

        <Route
          path="/favorite"
          element={<Favorite PRODUCTS={PRODUCTS} />}
        ></Route>
        <Route path="/cart" element={<Cart PRODUCTS={PRODUCTS} cartArr={cartArr} setCartArr={setCartArr} />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProduct] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://e34ef501-31f4-45c0-973a-3f51ee2a26d9.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProduct(products);
      })
      .catch(function (error) {
        console.error("에러 발생: ", error);
      });
  }, []);
  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <br />
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;

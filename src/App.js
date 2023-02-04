import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">MY ECOMMERCE WEBSITE</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="https://www.x-cart.com/wp-content/uploads/2017/05/2.png">
                Home
              </a>
            </li>
            <li>
              <a href="https://in.images.search.yahoo.com/search/images;_ylt=AwrPocgpBN5j3Swl8TS7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=products+images&fr2=piv-web&type=E211IN826G0&fr=mcafee">
                Products
              </a>
            </li>
            <li>
              <a href="https://tse3.mm.bing.net/th?id=OIP.5hBzaIDm70-Rt42RxlyTVwHaG0&pid=Api&P=0">
                About
              </a>
            </li>
            <li>
              <a href="https://tse1.mm.bing.net/th?id=OIP.e1yMRcLt7lkptae5DpG91QHaE6&pid=Api&P=0">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="main-title">
          <em>Featured Products</em>{" "}
        </h1>
        <ul className="product-list">
          <li className="product1">
            <h3 className="product-name">Buy Online Cheap women ethnic wear 2016 at LURAP</h3>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.V8HAxRAdl46w87sT5Ndn1wHaJ4&pid=Api&P=0
            "
              alt=""
            ></img>
            <p className="product-description">Description of Product 1</p>
            <p className="product-price">$100</p>
            <button className="product-button">Add to Cart</button>
          </li>
          <li className="product2">
            <h3 className="product-name">Arrow Newyork Men Dark Green Manhattan Slim Fit Solid Formal Shirt, Green</h3>
            <img
              src="http://3.bp.blogspot.com/-KsCOWk_3YVg/USQ3CDX99LI/AAAAAAAAAqY/-LIT5OdCnzM/s1600/SUITS201210244280.jpg
            "
              alt=""
            ></img>
            <p className="product-description">Description of Product 2</p>
            <p className="product-price">$200</p>
            <button className="product-button">Add to Cart</button>
          </li>
          <li className="product3">
            <h3 className="product-name">MAC lap with high automation</h3>
            <img
              src="https://pngimg.com/uploads/macbook/macbook_PNG35.png
            "
              alt=""
            ></img>
            <p className="product-description">Description of Product 3</p>
            <p className="product-price">$300</p>
            <button className="product-button">Add to Cart</button>
          </li>
          <li className="product4">
            <h3 className="product-name">I-phone with various trending features</h3>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.thanxWr7pgMNxd9qTRanEAHaKI&pid=Api&P=0
            "
              alt=""
            ></img>
            <p className="product-description">Description of Product 4</p>
            <p className="product-price">$300</p>
            <button className="product-button">Add to Cart</button>
          </li>
        </ul>
      </main>
      <footer className="footer">
        <p>Copyright © My Ecommerce Store 2023</p>
      </footer>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [filter, setFilter] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    // Send an API request to search for the products
    fetch(`/products?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchProducts(data))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  useEffect(() => {
    // Filter the search results based on the filter criteria
    setFilteredProducts(
      searchProducts.filter((product) => product.category === filter)
    );
  }, [searchProducts, filter]);

  useEffect(() => {
    // Send an API request to search for the products
    fetch(`/products?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  useEffect(() => {
    // Fetch the products for the selected category
    fetch(`/products?category=${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [selectedCategory]);
  return (
    <>
     
     <div className="container">
     <header className="header">
     <filter className="filter">
      <label>
        Filter by category:
        <select class={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Womens wear">
          Womens wear
          </option>
          <option value="Mens wear">
          Mens wear
          </option>
          <option value="Electronics">
          Electronics
          </option>
        </select>
      </label>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <select
        class={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Womens wear">Womens wear</option>
        <option value=" Mens wear"> Mens wear</option>
        <option value="Electronics">Electronics</option>
      </select>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          // Send an API request to search for the products
          fetch(`/products?search=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
        }}
      >
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button class="submit">Search</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
</filter>
       
        <h1 className="header-title"> HAPPY SHOPPING</h1>
          <nav className="header-nav">
      
            <ul>
              <li>
                <a href="https://www.x-cart.com/wp-content/uploads/2017/05/2.png">
                  <em>Home</em>
                </a>
              </li>
              <li>
                <a href="https://in.images.search.yahoo.com/search/images;_ylt=AwrPocgpBN5j3Swl8TS7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=products+images&fr2=piv-web&type=E211IN826G0&fr=mcafee">
                  Products
                </a>
              </li>
              <li>
                <a href="https://www.smartinsights.com/wp-content/uploads/2019/02/About-Us-page-example.png">
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
              <h3 className="product-name">
              Womens wear
              </h3>
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
              <h3 className="product-name">
              Mens wear
              </h3>
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
              <h3 className="product-name">Electronics</h3>
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
              <h3 className="product-name">
                Electronics
              </h3>
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
    </>
  );
};

export default App;



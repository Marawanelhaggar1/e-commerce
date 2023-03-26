import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="app">
      <Header />
      <main>
        <div className="wrapper">
          <Products Products={products} />
          <div className="filterEl">filterEl</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

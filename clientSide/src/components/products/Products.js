import React from "react";
import "../../css/products/products.css";
const Products = ({ Products }) => {
  return (
    <div className="productsEl">
      {Products.map((product, idx) => (
        <div className="prod" key={product.id}>
          <img src={product.imageUrl} alt="imag" />
          <div className="content">
            <p>{product.title}</p>
            <span>{product.price}$</span>
          </div>
          <p className="desc">{product.description}</p>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import "../../css/products/products.css";
import Modal from "react-modal";
const Products = ({ Products }) => {
  const [product, setProduct] = useState("");

  const openModel = (p) => {
    setProduct(p);
  };

  const closeModel = () => {
    setProduct(false);
  };

  return (
    <div className="productsEl">
      {Products.map((product, idx) => (
        <div className="prod" key={product.id}>
          <a href="#" onClick={() => openModel(product)}>
            <img src={product.imageUrl} alt="imag" />
          </a>
          <div className="content">
            <p>{product.title}</p>
            <span>{product.price}$</span>
          </div>
          <p className="desc">{product.description}</p>
          <button>Add To Cart</button>
        </div>
      ))}

      {
        <Modal isOpen={product} onRequestClose={closeModel}>
          <div className="product-info">
            <div className="close-icon" onClick={closeModel}>
              &times;
            </div>
            <img src={product.imageUrl} alt="imag" />
            <p>{product.title}</p>
            <span>{product.price}$</span>
            <p className="desc">{product.description}</p>
            <button>Add To Cart</button>
          </div>
        </Modal>
      }
    </div>
  );
};

export default Products;

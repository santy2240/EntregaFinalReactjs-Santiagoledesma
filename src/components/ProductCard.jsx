import React from "react";
import { Link } from "react-router-dom";

import './ProductCard.css';
import CartButtons from "./CartButtons";

const ProductCard = ({ productData }) => {
  return (

    <div className="card">
      <img src={productData.images} alt={productData.title} />
      <div className="card-body">
        <h5 className="card-title">{productData.title}</h5>
        <p className="card-text">{productData.description}</p>
        <p className="card-price">${productData.price}</p>
        <p className="card-stock">Stock: {productData.stock}</p>
        <CartButtons />
        <Link to={`/item/${productData.id}`} >Ver más</Link>
      </div>
    </div>

  );
};

export default ProductCard;

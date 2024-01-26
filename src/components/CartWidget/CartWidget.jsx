import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContext";

import iconCarrito from "../../media/Iconcarrito.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [qty, setQty] = useState(0);
  const { count } = useContext(CartContext);
  useEffect(() => {
    setQty(count.products.reduce((total, product) => total + product.qty, 0));
  }, [count]);
  return (
    <Link
    to="/cart"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={iconCarrito} alt="carrito" />
      <span>{qty}</span>
    </Link>
  );
};

export default CartWidget;

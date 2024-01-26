import React from "react";

const CartDetailCard = ({ product, qty }) => {
    return (
        <div>
            <div>
            <div>
                <img src={product.image} alt={product.title} />
            </div>
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Cantidad: {qty.qty}</p>
            </div>
            </div>
        </div>
    );
};

export default CartDetailCard;
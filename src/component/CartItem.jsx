import React from "react";

import style from "./cart.module.css";
import { CloseIcon } from "../static/svg/icons";

const CartItem = ({ cart, deleteFromCart }) => {
  const deleteProduct = id => {
    deleteFromCart(id);
  };

  return (
    <div className={style.cart}>
      <div>
        <img src={cart.img} alt="t-shirt" />
      </div>
      <div className="pos-relative">
        <h4>{cart.title}</h4>
        <div className={style.cartInfo}>
          <span>{cart.style}</span>
          <span>${Math.floor(cart.price * cart.quantity)}.0</span>
        </div>
        <p>Quantity:{cart.quantity}</p>
        <div className={style.close} onClick={() => deleteProduct(cart.id)}>
          <CloseIcon icon={style.cartIconX} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

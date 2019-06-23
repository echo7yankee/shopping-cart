import React from "react";

import style from "./cart.module.css";
import { CloseIcon } from "../static/svg/icons";

const CartItem = ({
  cart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const deleteProduct = id => {
    deleteFromCart(id);
  };

  return (
    <div className={style.cart}>
      {cart.quantity === cart.installments && (
        <div className={style.stockLimit}>
          <span>You have touched the stock limit of {cart.installments}</span>
          <div className="arrow-box" />
        </div>
      )}
      <div>
        <img src={cart.img} alt="t-shirt" />
      </div>
      <div className="pos-relative">
        <h4>{cart.title}</h4>
        <div className={style.cartInfo}>
          <span>{cart.style}</span>
          <span>${Math.ceil(cart.price * cart.quantity)}.0</span>
        </div>
        <p>Quantity:{cart.quantity}</p>
        <div>
          <button
            className={`${style.incrementalBtn} btn ml-2`}
            onClick={() => increaseQuantity(cart.id)}
          >
            +
          </button>{" "}
          <button
            className={`${style.incrementalBtn} btn ml-1`}
            onClick={() => decreaseQuantity(cart.id)}
          >
            -
          </button>
        </div>
        <div className={style.close} onClick={() => deleteProduct(cart.id)}>
          <CloseIcon icon={style.cartIconX} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import { imgsBg, imgsSm } from "../data/imgs";

import style from "./products.module.css";

const Product = ({ product, index, addToCart, cart, increaseQuantity }) => {
  let identicalProduct;

  const addProduct = product => {
    identicalProduct = cart.some(cartItem => {
      return cartItem.id === product.id;
    });

    if (identicalProduct === true) {
      increaseQuantity(product.id);
      return;
    }

    addToCart(product, imgsSm[index].img);
  };

  return (
    <div className={style.product}>
      {product.isFreeShipping && (
        <div className={style.badge}>
          <span>Free shipping</span>
        </div>
      )}
      <div className={style.installment}>
        <span>
          {product.installments > 0 ? (
            <span>
              On stock{" "}
              <span className="yellow-text">{product.installments}</span>
            </span>
          ) : (
            <span className="red-text"> Sold out </span>
          )}
        </span>
      </div>
      <div className={style.availableSizes}>
        <span>Availabale in sizes {product.availableSizes.join(", ")}</span>
      </div>
      <div>
        <img src={imgsBg[index].img} alt="t-shirt" />
        <p className={`${style.title} mt-2`}>{product.title}</p>
        <div className="center">
          <span className="border" />
        </div>
        <p className={style.price}>${product.price}</p>
        <button onClick={() => addProduct(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;

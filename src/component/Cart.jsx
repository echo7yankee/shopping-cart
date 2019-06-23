import React from "react";
import style from "./cart.module.css";
import CartItem from "./CartItem";
import { CartIcon, CloseIcon } from "../static/svg/icons";

//Redux
import { connect } from "react-redux";
import {
  deleteFromCart,
  onToggle,
  clearCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/actions/dataActions";

const Cart = ({
  toggle,
  cart,
  deleteFromCart,
  onToggle,
  clearCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const subtotal = cart
    .map(cartItem => {
      return cartItem.quantity * cartItem.price;
    })
    .reduce((cur, acc) => {
      return Math.floor(cur + acc);
    }, 0);

  const submitCart = () => {
    alert(
      `Bia, ce faci? Ne gati toti banii din casa? Ai consumat $${subtotal}. Lasa ca vezi tu.`
    );
  };

  return (
    <div className={toggle ? style.cartContainerShow : style.cartContainer}>
      <div>
        <button className={style.cartBtn} onClick={onToggle}>
          {toggle ? (
            <CloseIcon icon={style.cartIconSm} />
          ) : (
            <CartIcon icon={style.cartIconSm} />
          )}
          {!toggle && <span>{cart.length}</span>}
        </button>
      </div>
      <div className={style.cartCheckout}>
        <div className={`${style.cartCheckoutTitle} align-center`}>
          <CartIcon icon={style.cartIconMd} />
          <span>{cart.length}</span>
          <h4 className="ml-2">Cart</h4>
        </div>
        <div className="center">
          <button className="mt-3 btn btn-clear" onClick={clearCart}>
            Clear cart
          </button>
        </div>
        <div className={style.cartItems}>
          {cart.map(cart => {
            return (
              <CartItem
                key={cart.id}
                cart={cart}
                deleteFromCart={deleteFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            );
          })}
        </div>
        <div className={style.totalContainer}>
          <div className="justify-between">
            <h4>SUBTOTAL</h4>
            <span>
              ${subtotal}
              .0
            </span>
          </div>
          <div className="center mt-5">
            <button className="mr-7" onClick={submitCart}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.data.cart,
    toggle: state.data.toggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: id => dispatch(deleteFromCart(id)),
    onToggle: () => dispatch(onToggle()),
    clearCart: () => dispatch(clearCart()),
    increaseQuantity: id => dispatch(increaseQuantity(id)),
    decreaseQuantity: id => dispatch(decreaseQuantity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

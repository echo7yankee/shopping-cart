import {
  GET_DATA,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DELETE_FROM_CART,
  TOGGLE_CART,
  CLEAR_CART,
  DECREASE_QUANTITY
} from "../types";
import data from "../../data/products.json";

export const getData = () => {
  return {
    type: GET_DATA,
    payload: data.products
  };
};

export const addToCart = (product, img) => {
  return {
    type: ADD_TO_CART,
    payload: product,
    img
  };
};

export const deleteFromCart = id => {
  return {
    type: DELETE_FROM_CART,
    id
  };
};

export const increaseQuantity = id => {
  return {
    type: INCREASE_QUANTITY,
    id
  };
};

export const decreaseQuantity = id => {
  return {
    type: DECREASE_QUANTITY,
    id
  };
};

export const onToggle = () => {
  return {
    type: TOGGLE_CART
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

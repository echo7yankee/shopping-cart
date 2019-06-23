import {
  GET_DATA,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DELETE_FROM_CART,
  TOGGLE_CART,
  CLEAR_CART
} from "../types";

const initialState = {
  products: [],
  cart: [],
  toggle: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        toggle: !state.toggle
      };
    case GET_DATA:
      return {
        ...state,
        products: action.payload
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: 1, img: action.img }
        ],
        toggle: true
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(cartItem => {
          return cartItem.id !== action.id;
        })
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        toggle: false
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(cartItem => {
          if (cartItem.id === action.id) {
            cartItem = {
              ...cartItem,
              quantity: cartItem.quantity + 1
            };
          }
          return cartItem;
        })
      };
    default:
      return state;
  }
}

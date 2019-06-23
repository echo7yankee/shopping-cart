import React, { useEffect } from "react";

import style from "./products.module.css";
import Product from "./Product";

//Redux
import {
  getData,
  addToCart,
  IncreaseQuantity
} from "../redux/actions/dataActions";
import { connect } from "react-redux";

const Products = ({ data, getData, addToCart, cart, IncreaseQuantity }) => {
  useEffect(() => {
    getData();
  });

  return (
    <div className={style.productsContainer}>
      <header className="justify-between">
        <p className="ml-2">16 Product(s) found</p>
        <div>
          <span>Order by</span>
          <select className="ml-1" style={{ marginRight: "7px" }}>
            <option value="select">Select</option>
            <option value="select">Lowest to highest</option>
            <option value="select">Highest to lowest</option>
          </select>
        </div>
      </header>
      <div className="flex-wrap">
        {data.map((data, index) => {
          return (
            <Product
              key={data.id}
              product={data}
              index={index}
              addToCart={addToCart}
              IncreaseQuantity={IncreaseQuantity}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.products,
    cart: state.data.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData()),
    addToCart: (product, img) => dispatch(addToCart(product, img)),
    IncreaseQuantity: id => dispatch(IncreaseQuantity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

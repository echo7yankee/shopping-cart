import React from "react";

import Cart from "./component/Cart";
import Sizes from "./component/Sizes";
import Products from "./component/Products";

//Redux
import { connect } from "react-redux";

const App = () => {
  return (
    <div>
      <Cart />
      <div className="container">
        <Sizes />
        <Products />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toggle: state.data.toggle
  };
};

export default connect(
  mapStateToProps,
  null
)(App);

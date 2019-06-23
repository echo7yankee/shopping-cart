import React from "react";

import Cart from "./component/Cart";
import Sizes from "./component/Sizes";
import Products from "./component/Products";

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

export default App;

import React from "react";

import style from "./sizes.module.css";

const Sizes = () => {
  return (
    <div className={style.sizesContainer}>
      <h4>Sizes:</h4>
      <div className={`${style.sizes} mt-2`}>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>XS</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>S</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>M</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>ML</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>L</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>XL</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className={style.checkmark}>XXL</span>
        </label>
      </div>
    </div>
  );
};

export default Sizes;

import React, { useState } from "react";
import { formatPrice } from "../utils/";
const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectPrice, setSelectPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectPrice)}</span>
      </label>
      <input
        type="range"
        step={step}
        min={0}
        max={maxPrice}
        value={selectPrice}
        onChange={(e) => setSelectPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between mt-2 px-3">
        <span className="font-bold">0</span>
        <span className="font-bold">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;

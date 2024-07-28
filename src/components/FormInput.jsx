import React from "react";

const FormInput = ({ name, type, defaultValue, label }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;

import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import { FormInput, FormSelect, FormRange, FormCheckbox } from "../components";

const Filters = () => {
  const { meta, params } = useLoaderData();
  // console.log(meta);
  const { search, company, category, shipping, order, price } = params;
  //  console.log(shipping);
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Selects */}
      {/* category */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Company */}
      <FormSelect
        label="select compony"
        name="compony"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* Order */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* Price */}
      <FormRange
        label={"select range"}
        size={"range-sm"}
        name={"price"}
        price={price}
      />
      {/* checkbox */}
      <FormCheckbox
        label={"free shipping"}
        name={"shipping"}
        size={"checkbox-sm"}
        defaultValue={shipping}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;

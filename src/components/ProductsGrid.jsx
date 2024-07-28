import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);
  return <div className="">
    {products.map((product) =>{
        const {} = product
    })}
  </div>;
};

export default ProductsGrid;

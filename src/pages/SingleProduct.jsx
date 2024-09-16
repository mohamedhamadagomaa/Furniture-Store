import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import { customFetch, formatPrice, generateAmountOption } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProduct = {
    cartId: product.id + productColor,
    productId: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 rounded-lg lg:w-full"
        />
        {/* Project Info */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* Colors */}
          <div>
            <h4 className="capitalize tracking-wider font-medium ">colors</h4>
            <div>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    onClick={() => setProductColor(color)}
                    style={{ backgroundColor: color }}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* Amounts */}
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="capitalize text-md font-medium tracking-wider">
                amount
              </h4>
            </label>
            <select
              id="amount"
              value={amount}
              onChange={handleAmount}
              className="select select-secondary select-bordered select-md"
            >
              {generateAmountOption(20)}
            </select>
          </div>
          {/* cart btn */}
          <div className="mt-10">
            <button
              onClick={() => addToCart()}
              className="btn btn-secondary btn-md uppercase"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

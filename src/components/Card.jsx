import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/products-reducer";

export const Card = ({ name, price, count, img, id }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
  };
  return (
    <div className="flex-col gap-4">
      <img className="w-60 h-80" src={img} alt="img" />
      <h1>{name}</h1>
      <strong>{price}$</strong>
      <p>Count {count}</p>
      <button onClick={buyProduct}>buy</button>
    </div>
  );
};

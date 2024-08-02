import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleAmount,
  removeProduct,
} from "../redux/products/products-reducer";

export const Cart = ({ userPrice, img, userCount, count, id, name }) => {
  const dispatch = useDispatch();

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };
  return (
    <div>
      <img src={img} alt="img" />
      <h1>{name}</h1>
      <strong>{userPrice}$</strong>
      <p>Count {count}</p>
      <button onClick={() => changeProductPrice("add")}>+</button>
      <strong>{userCount}</strong>
      {userCount > 1 ? (
        <button onClick={() => changeProductPrice("remove")}>-</button>
      ) : (
        <button onClick={() => dispatch(removeProduct(id))}>X</button>
      )}
    </div>
  );
};

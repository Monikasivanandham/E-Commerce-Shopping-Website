import React, { useEffect, useState, useContext } from "react";
import "../Css/Cart.css";
import { cartContext } from "../App";

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  // function Remove() {
  //   const clear = document.querySelector(".cart-product");
  //   clear.remove();
  //   const rewrite = document.querySelector(".heading-3");
  //   rewrite.remove(total.value);
  // }

  return (
    <>
      <h1 className="heading-1">CART</h1>
      <div className="items">
        <h2>Total Quantity:{cart.length}</h2>
        <div className="cart-container">
          {cart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.pic} alt="image" />
              </div>
              <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs:{product.amt}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="heading-3">Total Amount:{total}</h3>
      </div>
    </>
  );
};

export default Cart;

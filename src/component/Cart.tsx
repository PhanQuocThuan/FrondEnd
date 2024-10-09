import React, { useContext } from "react";
import { CartContext } from "../component/CartContext";

const Cart: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <div className="container my-3 justify-content-center">
              <div className="row" key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  width="100"
                  height="100%"
                  className="col-1"
                />
                <div className="col-2">
                  <div className="col">{product.name}</div>Price:{" "}
                  {product.price} vnd
                </div>
                <div className="col-1">Quantity: {product.quantity}</div>
                <div className="col-3">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>Tổng: {getTotalPrice()} VND</h3>
      </div>
    </div>
  );
};

export default Cart;

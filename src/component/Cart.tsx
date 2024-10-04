import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const increaseQuantity = (id: number) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart(
      cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>Price: ${product.price}</span>
              <span>Quantity: {product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>Total Price: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Cart;

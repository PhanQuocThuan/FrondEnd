// src/component/Product.tsx
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext"; // Đảm bảo đường dẫn là chính xác
import { Link } from "react-router-dom";

interface Props {
  id: string; // Đổi từ number sang string nếu id là chuỗi
  img: string; // Đổi từ any sang string
  name: string;
  price: number;
  status?: boolean;
  quantity?: number;
}

const Product: React.FC<Props> = ({ img, name, price, status, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1, img });
  };

  return (
    <div className="col-2 border border-warning border-2 my-3 mx-3 rounded-4">
      <img
        src={img}
        className="card-img img-fluid rounded-top-4 border-warning"
        alt={name}
      />
      <div className="tittle bg-danger-subtle text-danger-emphasis rounded-bottom-4">
        <h5 className="card-title fw-bold text-center">{name}</h5>
        <p className="card-text fw-semibold text-center fs-5">{price} VND</p>
        <Link to={`/product/${id}`} className="btn btn-none">
          Xem chi tiết
        </Link>
        <span className="contact-info d-flex align-items-center justify-content-around">
          <button className="btn btn-outline-info" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
          </button>
          <span className="text-black d-inline text-center">
            {status ? "Còn hàng" : "Hết hàng"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Product;

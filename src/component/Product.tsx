import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../component/CartContext"; // Import CartContext
import { Link } from "react-router-dom";

interface Props {
  id: string;
  img: any;
  name: string;
  price: number;
  status?: boolean;
  quantity?: number;
}

const Product: React.FC<Props> = ({ img, name, price, status, id }) => {
  const { addToCart } = useContext(CartContext); // Lấy addToCart từ CartContext

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1, img }); // Sử dụng id từ props
  };

  return (
    <div className="col-2 border border-warning border-2 my-3 rounded-4">
      <img
        src={img}
        className="card-img img-fluid rounded-top-4 border-warning"
        alt={name}
      />
      <div className="tittle bg-danger-subtle text-danger-emphasis rounded-bottom-4">
        <h5 className="card-title fw-bold text-center">{name}</h5>
        <p className="card-text fw-semibold text-center fs-5">{price} vnd</p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          Xem chi tiết
        </Link>
        <span className="contact-info d-flex align-items-center justify-content-around">
          <button className="btn btn-outline-info" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
          </button>
          <text className="text-black d-inline text-center">
            {status ? "Còn hàng" : "Hết hàng"}
          </text>
        </span>
      </div>
    </div>
  );
};

export default Product;

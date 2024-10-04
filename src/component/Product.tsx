import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;
interface Props extends DetailedHTMLProps<InputAttributes, HTMLInputElement> {
  img: any;
  name: string;
  price: number;
  status?: boolean;
  quantity?: number;
}
const Product: React.FC<Props> = ({ img, name, price = 0, status }) => {
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
        <span className="contact-info d-flex align-items-center justify-content-around">
          <Link to="/cart" className="btn btn-outline-info">
            <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
          </Link>
          <text className="text-black d-inline text-center">
            {status ? "Còn hàng" : "Hết hàng"}
          </text>
        </span>
      </div>
    </div>
  );
};

export default Product;

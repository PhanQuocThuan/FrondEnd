import React, { useEffect, useState } from "react";
import "./css/Body.css";
import Product from "../component/Product"; // Đường dẫn đến component Product
import { fetchOtherCakes } from "../firebase/ProductDetail"; // Hàm để lấy các loại bánh khác
import { Product as ProductType } from "../firebase/type"; // Đường dẫn đến interface

const OtherCakes = () => {
  const [cakes, setCakes] = useState<ProductType[]>([]); // Định nghĩa kiểu cho state

  useEffect(() => {
    const getCakes = async () => {
      const cakeList = await fetchOtherCakes(); // Lấy các loại bánh khác
      setCakes(cakeList);
    };

    getCakes();
  }, []);

  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>CÁC LOẠI BÁNH KHÁC CỦA CHÚNG TÔI</h2>
      </div>
      <div className="container">
        <div className="row">
          {cakes.map((cake) => (
            <Product
              key={cake.id}
              id={cake.id}
              img={cake.img}
              name={cake.name}
              price={cake.price}
              status={cake.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherCakes;

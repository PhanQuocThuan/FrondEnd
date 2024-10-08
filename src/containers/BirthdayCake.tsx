import React, { useEffect, useState } from "react";
import "./css/Body.css";
import Product from "../component/Product";
import { fetchBirthdayCakes } from "../firebase/ProductDetail";
import { Product as ProductType } from "../firebase/type";

const BirthdayCake = () => {
  const [cakes, setCakes] = useState<ProductType[]>([]);

  useEffect(() => {
    const getCakes = async () => {
      const cakeList = await fetchBirthdayCakes();
      setCakes(cakeList);
    };

    getCakes();
  }, []);

  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>BÁNH SINH NHẬT CỦA CHÚNG TÔI</h2>
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

export default BirthdayCake;

// src/containers/Body.tsx
import React, { useEffect, useState } from "react";
import "./css/Body.css"; // Đảm bảo rằng đường dẫn CSS là chính xác
import Product from "../component/Product"; // Đường dẫn đến Product
import { fetchProducts } from "../firebase/ProductDetail"; // Đường dẫn đến hàm fetch
import { Product as ProductType } from "../firebase/type"; // Đường dẫn đến interface

const Body = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // Định nghĩa kiểu cho state

  useEffect(() => {
    const getProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };

    getProducts();
  }, []);

  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h2>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

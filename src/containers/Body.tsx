import React, { useEffect, useState } from "react";
import "./css/Body.css";
import Product from "../component/Product";
import { database } from "../firebaseConfig"; // Import cấu hình Firebase
import { ref, onValue } from "firebase/database"; // Import các hàm cần thiết

const Body = () => {
  const [products, setProducts] = useState([]); // State để lưu sản phẩm

  useEffect(() => {
    const productsRef = ref(database, 'products/'); // Truy cập đến node 'products'
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const productList = [];
      for (let id in data) {
        productList.push({ id, ...data[id] }); // Thêm id vào từng sản phẩm
      }
      setProducts(productList); // Cập nhật state với danh sách sản phẩm
    });
  }, []);

  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h2>
      </div>
      <div className="row justify-content-center justify-content-around">
        {products.map((product) => (
          <Product
            key={product.id} // Dùng id làm key cho mỗi sản phẩm
            img={`${process.env.PUBLIC_URL}/${product.img}`} // Cập nhật đường dẫn ảnh
            name={product.name}
            price={product.price}
            status={product.status}
            quantity={product.quantity}
            id={product.id} // Truyền id cho Product
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

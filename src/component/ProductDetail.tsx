import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../component/CartContext";
import { database } from "../firebaseConfig"; // Import cấu hình Firebase
import { ref, onValue } from "firebase/database"; // Import các hàm cần thiết

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy ID sản phẩm từ URL
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<any>(null); // State để lưu thông tin sản phẩm

  useEffect(() => {
    const productRef = ref(database, `products/${id}`); // Truy cập đến node của sản phẩm theo ID
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setProduct({ id, ...data }); // Cập nhật state với thông tin sản phẩm
      }
    });
  }, [id]); // Chạy lại khi ID thay đổi

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="product-detail container">
      <img src={product.img} alt={product.name} className="product-img" />
      <h1>{product.name}</h1>
      <p>{product.description || "Không có mô tả"}</p> {/* Nếu có mô tả, hiển thị, nếu không thì thông báo */}
      <p>Giá: {product.price} vnd</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductDetail;

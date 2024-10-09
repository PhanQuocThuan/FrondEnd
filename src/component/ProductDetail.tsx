import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../component/CartContext";
import { doc, getDocs, collection } from "firebase/firestore";
import { firestore } from "./../firebase/firebase";

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  status: boolean;
  quantity: number;
  description: string;
  collection: string | undefined;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(firestore, "products"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
  }, [id]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      img: product.img,
    });
  };

  return (
    <div className="container product-detail">
      <div className="row">
        <div className="col-6">
          <img src={product.img} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Giá: {product.price} VND</p>
          <p>Tình trạng: {product.status ? "Còn hàng" : "Hết hàng"}</p>
          <p>Số lượng: {product.quantity}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

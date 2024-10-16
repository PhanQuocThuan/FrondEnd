import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  description: string;
  status: boolean;
  quantity: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.img,
      });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        console.error("No product ID provided");
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(firestore, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data() as Product);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3>Giá: {product.price} VND</h3>
            <h4>{product.status ? "Còn hàng" : "Hết hàng"}</h4>
            <button
              className="btn btn-primary"
              disabled={!product.status}
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

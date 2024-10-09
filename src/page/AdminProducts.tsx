import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    category: "",
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const productsCollection = collection(firestore, "products");

  const fetchProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product))
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (newProduct.name && newProduct.price > 0 && newProduct.quantity > 0) {
      await addDoc(productsCollection, newProduct);
      fetchProducts();
      setNewProduct({ name: "", price: 0, quantity: 0, category: "" });
    }
  };

  const updateProduct = async (
    id: string,
    updatedProduct: Omit<Product, "id">
  ) => {
    const productDoc = doc(firestore, "products", id);
    await updateDoc(productDoc, updatedProduct);
    fetchProducts();
    setEditingProduct(null);
  };

  const deleteProduct = async (id: string) => {
    const productDoc = doc(firestore, "products", id);
    await deleteDoc(productDoc);
    fetchProducts();
  };

  return (
    <div>
      <h1>Manage Products</h1>

      <div className="product-inputs">
        <input
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
          }
          className="mx-3"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              quantity: parseInt(e.target.value),
            })
          }
        />
        <input
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
          className="mx-3"
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              {editingProduct ? (
                <>
                  <td>
                    <input
                      value={editingProduct.name ?? ""}
                      onChange={(e) =>
                        setEditingProduct((prev) =>
                          prev ? { ...prev, name: e.target.value } : null
                        )
                      }
                      placeholder="Product Name"
                    />
                  </td>
                  <td>
                    <input
                      value={editingProduct.price ?? ""}
                      onChange={(e) =>
                        setEditingProduct((prev) =>
                          prev
                            ? { ...prev, price: parseInt(e.target.value, 10) }
                            : null
                        )
                      }
                      placeholder="Price"
                    />
                  </td>
                  <td>
                    <input
                      value={editingProduct.quantity ?? ""}
                      onChange={(e) =>
                        setEditingProduct((prev) =>
                          prev
                            ? {
                                ...prev,
                                quantity: parseInt(e.target.value, 10),
                              }
                            : null
                        )
                      }
                      placeholder="Quantity"
                    />
                  </td>
                  <td>
                    <input
                      value={editingProduct.category ?? ""}
                      onChange={(e) =>
                        setEditingProduct((prev) =>
                          prev ? { ...prev, category: e.target.value } : null
                        )
                      }
                      placeholder="Category"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        updateProduct(editingProduct.id, {
                          name: editingProduct.name,
                          price: editingProduct.price,
                          quantity: editingProduct.quantity,
                          category: editingProduct.category,
                        })
                      }
                    >
                      Save
                    </button>
                    <button onClick={() => setEditingProduct(null)}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="mx-2"
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;

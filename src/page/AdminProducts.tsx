import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  img: string;
  status: boolean;
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<{
    name: string;
    price: number;
    quantity: number;
    category: string;
    imgFile: File | null;
  }>({
    name: "",
    price: 0,
    quantity: 0,
    category: "",
    imgFile: null,
  });
  const [searchTerm, setSearchTerm] = useState("");

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
      let imgUrl = "";

      if (newProduct.imgFile) {
        const imgRef = ref(
          storage,
          `products/${new Date().getTime()}_${newProduct.imgFile.name}`
        );
        const snapshot = await uploadBytes(imgRef, newProduct.imgFile);
        imgUrl = await getDownloadURL(snapshot.ref);
      }

      const { imgFile, ...productData } = newProduct;
      const finalProductData = {
        ...productData,
        img: imgUrl,
        status: newProduct.quantity > 0,
      };

      await addDoc(productsCollection, finalProductData);
      fetchProducts();
      //reset
      setNewProduct({
        name: "",
        price: 0,
        quantity: 0,
        category: "",
        imgFile: null,
      });
    }
  };

  const updateProduct = async (
    id: string,
    updatedProduct: Omit<Product, "id">
  ) => {
    const productDoc = doc(firestore, "products", id);
    let imgUrl = updatedProduct.img;

    if (newProduct.imgFile) {
      if (editingProduct?.img) {
        const oldimgRef = ref(storage, editingProduct.img);
        await deleteObject(oldimgRef);
      }

      const newimgRef = ref(
        storage,
        `products/${new Date().getTime()}_${newProduct.imgFile.name}`
      );
      const snapshot = await uploadBytes(newimgRef, newProduct.imgFile);
      imgUrl = await getDownloadURL(snapshot.ref);
    }

    const updatedData = { ...updatedProduct, img: imgUrl };
    await updateDoc(productDoc, updatedData);

    fetchProducts();
    setEditingProduct(null);
  };

  const deleteProduct = async (id: string) => {
    const product = products.find((p) => p.id === id);

    if (product?.img) {
      const imgRef = ref(storage, product.img);
      await deleteObject(imgRef);
    }

    const productDoc = doc(firestore, "products", id);
    await deleteDoc(productDoc);

    fetchProducts();
  };

  const filteredProducts = products.filter((product) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerSearchTerm) ||
      product.price.toString().includes(lowerSearchTerm) ||
      product.category.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div>
      <h1>Manage Products</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-3"
      />
      <div className="product-inputs">
        <input
          type="file"
          className="border"
          onChange={(e) =>
            setEditingProduct((prev) =>
              prev
                ? {
                    ...prev,
                    imgFile: e.target.files?.[0] || null,
                  }
                : null
            )
          }
        />
        <input
          placeholder="Product Name"
          className="ms-3"
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
        <select
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
          className="mx-3"
        >
          <option value="other">Other</option>
          <option value="birthday">Birthday</option>
        </select>

        <button onClick={addProduct}>Add Product</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>img</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              {editingProduct?.id === product.id ? (
                <>
                  <td>
                    {editingProduct?.img && (
                      <img
                        src={editingProduct.img}
                        alt={editingProduct.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    )}
                    <input
                      type="file"
                      onChange={(e) =>
                        setEditingProduct((prev) =>
                          prev
                            ? { ...prev, imgFile: e.target.files?.[0] || null }
                            : null
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editingProduct.name}
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
                      type="number"
                      value={editingProduct.price}
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
                      type="number"
                      value={editingProduct.quantity}
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
                      value={editingProduct.category}
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
                          img: editingProduct.img,
                          status: editingProduct.quantity > 0,
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
                  <td>
                    <img
                      src={product.img}
                      alt={product.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
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

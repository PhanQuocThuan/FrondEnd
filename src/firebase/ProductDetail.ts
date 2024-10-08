import { firestore } from "./firebase"; // Import firestore
import { collection, getDocs, query, where } from "firebase/firestore";
import { Product } from "./type"; // Import interface

export const fetchOtherCakes = async (): Promise<Product[]> => {
  const cakesCollection = collection(firestore, "products");
  const q = query(cakesCollection, where("category", "==", "other"));
  const cakeSnapshot = await getDocs(q);
  const cakeList = cakeSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  return cakeList;
};

export const fetchBirthdayCakes = async (): Promise<Product[]> => {
  const cakesCollection = collection(firestore, "products");
  const q = query(cakesCollection, where("category", "==", "birthday"));
  const cakeSnapshot = await getDocs(q);
  const cakeList = cakeSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  return cakeList;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const productsCollection = collection(firestore, "products");
  const productSnapshot = await getDocs(productsCollection);
  const productList = productSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];

  return productList;
};

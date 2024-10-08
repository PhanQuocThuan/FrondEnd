import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addProduct = async () => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name: "Chocolate Cake",
      price: 100000,
      description: "A delicious chocolate cake",
      quantity: 10,
      img: "url/to/image",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

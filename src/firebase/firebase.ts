import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXxr8JtRlDBQdZ42iQBsC7QoaQjkPxXHI",
  authDomain: "project-fe-3bbb6.firebaseapp.com",
  databaseURL:
    "https://project-fe-3bbb6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-fe-3bbb6",
  storageBucket: "project-fe-3bbb6.appspot.com",
  messagingSenderId: "653902710068",
  appId: "1:653902710068:web:61534562f506a1c3f75161",
  measurementId: "G-4X73RMM024",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

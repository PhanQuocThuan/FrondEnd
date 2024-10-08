import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Đăng nhập thành công:", user);
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
  }
};

const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Đăng ký thành công:", user);
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("Đăng xuất thành công");
  } catch (error) {
    console.error("Lỗi đăng xuất:", error);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Người dùng đã đăng nhập:", user);
  } else {
    console.log("Không có người dùng nào đăng nhập");
  }
});

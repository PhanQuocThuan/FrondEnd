import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Giả sử bạn dùng Firebase
import { auth } from "../firebase/firebase"; // Đảm bảo đúng đường dẫn

interface AuthContextProps {
  currentUser: any; // Thay đổi kiểu dữ liệu nếu cần
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

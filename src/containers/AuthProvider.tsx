import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebase"; // Đảm bảo rằng bạn đã cấu hình firebase
import { onAuthStateChanged, User } from "firebase/auth";

export const AuthContext = createContext<{ currentUser: User | null }>({
  currentUser: null,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

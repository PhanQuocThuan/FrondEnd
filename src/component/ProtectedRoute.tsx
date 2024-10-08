import React, { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../containers/AuthProvider"; // Đảm bảo đường dẫn đúng

interface ProtectedRouteProps {
  children: ReactNode; // Chỉ định kiểu cho children
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  // Kiểm tra kiểu của currentUser
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Trả về children
};

export default ProtectedRoute;

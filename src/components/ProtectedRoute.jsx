import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // LocalStorage dan boya saqlagan tokenni tekshiramiz
  const token = localStorage.getItem("access");

  // Agar token bo'lmasa, uni /login sahifasiga qaytarib yuboramiz
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Agar token bo'lsa, ichidagi AdminLayout'ni ko'rsatadi
  return children;
};

export default ProtectedRoute;

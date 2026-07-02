// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // LocalStorage dan tokenni tekshiramiz (yoki auth context'dan)
  const isAuthenticated = localStorage.getItem("token");

  // Agar token bo'lmasa, uni /login sahifasiga qaytarib yuboramiz
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Agar login qilgan bo'lsa, o'zi kirmoqchi bo'lgan sahifani ko'rsatamiz
  return children;
};

export default ProtectedRoute;

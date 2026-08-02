import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
import { Navigate } from "react-router-dom";

// Simple auth check - in production, this would check actual auth state
const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

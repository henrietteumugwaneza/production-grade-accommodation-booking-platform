import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({});
    
    // Validation
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Check if user exists
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        u => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Login successful
        login({
          id: user.id,
          fullName: user.fullName,
          email: user.email
        });
        setIsLoading(false);
        alert(`Welcome back, ${user.fullName}!`);
        navigate("/");
      } else {
        // Login failed
        setIsLoading(false);
        setErrors({ general: "Invalid email or password" });
      }
    }, 1000);
  };
  
  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo className="w-16 h-16 text-[color:var(--color-primary)]" />
        </div>

        <h1 className="text-3xl font-bold mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-6">Log in to your account</p>

        <form onSubmit={handleLogin}>
          {/* General Error */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {errors.general}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-[color:var(--color-primary)] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[color:var(--color-primary)] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </MainLayout>
  );
}

export default Login;
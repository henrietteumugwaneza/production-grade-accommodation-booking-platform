import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock authentication
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };
  
  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />

          <button 
            type="submit"
            className="w-full bg-[color:var(--color-primary)] text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

      </div>
    </MainLayout>
  );
}

export default Login;
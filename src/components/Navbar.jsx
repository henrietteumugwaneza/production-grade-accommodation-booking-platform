import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
      navigate("/");
    }
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[color:var(--color-primary)] hover:opacity-80 transition"
        >
          <Logo className="w-8 h-8" />
          <span className="text-2xl font-bold hidden sm:block">StayFinder</span>
        </Link>

        {/* Search */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link to="/favorites" className="text-sm font-medium hover:text-[color:var(--color-primary)] transition">
            Favorites
          </Link>
          
          <Link to="/bookings" className="text-sm font-medium hover:text-[color:var(--color-primary)] transition">
            Bookings
          </Link>

          {isAuthenticated ? (
            <>
              {/* User Info */}
              <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
                <div className="w-8 h-8 bg-[color:var(--color-primary)] text-white rounded-full flex items-center justify-center font-semibold">
                  {user?.fullName?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{user?.fullName}</span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-50 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border px-4 py-2 rounded-full text-sm hover:shadow-md transition"
              >
                Login
              </Link>
              
              <Link
                to="/signup"
                className="bg-[color:var(--color-primary)] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
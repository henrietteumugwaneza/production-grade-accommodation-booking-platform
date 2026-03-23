import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[color:var(--color-primary)]"
        >
          StayFinder
        </Link>

        {/* Search */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link to="/favorites" className="text-sm font-medium hover:text-[color:var(--color-primary)]">
            Favorites
          </Link>
          
          <Link to="/bookings" className="text-sm font-medium hover:text-[color:var(--color-primary)]">
            Bookings
          </Link>

          <Link
            to="/login"
            className="border px-4 py-2 rounded-full text-sm hover:shadow-md transition"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
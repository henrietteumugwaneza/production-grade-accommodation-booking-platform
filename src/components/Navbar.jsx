import { Link } from "react-router-dom";

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
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
          <input
            type="text"
            placeholder="Search destinations"
            className="bg-transparent outline-none text-sm w-40"
          />
          <button className="ml-2 bg-[color:var(--color-primary)] text-white p-2 rounded-full">
            🔍
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link to="/favorites" className="text-sm font-medium hover:text-[color:var(--color-primary)]">
            Favorites
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
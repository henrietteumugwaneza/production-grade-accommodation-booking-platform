import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-primary text-2xl font-bold">
          StayFinder
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">
          <input
            type="text"
            placeholder="Search places..."
            className="outline-none text-sm w-40"
          />
          <button className="bg-primary text-white p-2 rounded-full ml-2">
            🔍
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link to="/favorites" className="text-sm font-medium">
            Favorites
          </Link>
          <Link
            to="/login"
            className="border px-4 py-2 rounded-full text-sm hover:shadow"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
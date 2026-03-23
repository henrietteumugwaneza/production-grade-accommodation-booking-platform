import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar({ onSearch }) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?q=${encodeURIComponent(query)}`);
      onSearch?.(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations"
        className="bg-transparent outline-none text-sm w-40 md:w-60"
      />
      <button
        type="submit"
        className="ml-2 bg-[color:var(--color-primary)] text-white p-2 rounded-full hover:opacity-90 transition"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;

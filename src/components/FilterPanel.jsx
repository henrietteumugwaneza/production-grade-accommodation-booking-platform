import { useState } from "react";

function FilterPanel({ onFilterChange }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 500,
    minRating: 0,
    location: ""
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      minPrice: 0,
      maxPrice: 500,
      minRating: 0,
      location: ""
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md sticky top-20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", Number(e.target.value))}
            placeholder="Min"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", Number(e.target.value))}
            placeholder="Max"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Minimum Rating</label>
        <select
          value={filters.minRating}
          onChange={(e) => handleFilterChange("minRating", Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        >
          <option value={0}>Any</option>
          <option value={3}>3+ Stars</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          placeholder="Enter location"
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}

export default FilterPanel;

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getListings } from "../services/listings";
import ListingCard from "../components/ListingCard";
import MainLayout from "../layouts/MainLayout";

function Home() {
  const [search, setSearch] = useState("");

  const { data = [], isLoading } = useQuery({
    queryKey: ["listings"],
    queryFn: getListings,
  });

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Find your next stay</h1>

        <input
          type="text"
          placeholder="Search..."
          className="mt-3 px-4 py-2 border rounded-full w-full md:w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Content */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default Home;
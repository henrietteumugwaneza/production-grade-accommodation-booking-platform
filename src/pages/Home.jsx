import { useQuery } from "@tanstack/react-query";
import { getListings } from "../services/listings";
import ListingCard from "../components/ListingCard";
import MainLayout from "../layouts/MainLayout";

function Home() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: getListings,
  });

  console.log(data); // 👈 DEBUG

  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold mb-4">
        Explore places to stay
      </h1>

      {/* ✅ Loading */}
      {isLoading && <p>Loading listings...</p>}

      {/* ❌ Error */}
      {isError && (
        <p className="text-red-500">
          Something went wrong: {error.message}
        </p>
      )}

      {/* ✅ Data */}

   {data?.map((item) => (
  <ListingCard key={item.id} item={item} />
))}
    </MainLayout>
    
  );
}

export default Home;
import ListingCard from "../components/ListingCard";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[color:var(--color-dark)]">
          Find your next stay
        </h1>
        <p className="text-gray-500 mt-1">
          Explore amazing places around you
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <ListingCard key={i} />
        ))}
      </div>

    </MainLayout>
  );
}

export default Home;
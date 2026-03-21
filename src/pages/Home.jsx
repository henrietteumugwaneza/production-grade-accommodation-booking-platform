import ListingCard from "../components/ListingCard";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold mb-4">
        Explore places to stay
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </MainLayout>
  );
}

export default Home;
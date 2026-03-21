import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-light min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
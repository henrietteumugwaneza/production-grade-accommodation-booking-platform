import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="bg-[color:var(--color-light)] min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6 flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
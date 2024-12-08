import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to CompanyName</h1>
          <p className="text-lg text-gray-600">We provide exceptional services to help your business thrive.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

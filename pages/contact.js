import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="max-w-md mx-auto space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full border border-gray-300 rounded p-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

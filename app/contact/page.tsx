import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Please fill out the form below, and
            we'll get back to you shortly.
          </p>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Additional Contact Info */}
        <section className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-2">
            Alternatively, you can reach us at:
          </p>
          <p className="text-lg text-gray-800 font-semibold">
            Email: support@company.com
          </p>
          <p className="text-lg text-gray-800 font-semibold">
            Phone: +1 (123) 456-7890
          </p>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;

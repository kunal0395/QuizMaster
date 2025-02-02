import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Have questions? Feel free to reach out to us through the following contact details.
      </p>

      {/* Contact Details Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FaEnvelope className="text-4xl mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Email Us</h3>
          <p className="text-gray-600">support@quizmaster.com</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FaPhone className="text-4xl mx-auto text-green-500 mb-4" />
          <h3 className="font-semibold text-lg">Call Us</h3>
          <p className="text-gray-600">+123 456 7890</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-4xl mx-auto text-red-500 mb-4" />
          <h3 className="font-semibold text-lg">Visit Us</h3>
          <p className="text-gray-600">123 Quiz Street, Knowledge City</p>
        </div>

      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows="4" required></textarea>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}

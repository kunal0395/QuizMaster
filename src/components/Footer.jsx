import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Brand Name */}
        <div className="text-lg font-semibold">
          QuizMaster
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </nav>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition text-xl"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-300 transition text-xl"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition text-xl"><FaInstagram /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} QuizMaster. All rights reserved.
      </div>
    </footer>
  ); 
}

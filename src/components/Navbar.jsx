import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            QuizMaster
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 font-medium">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-1 border-t border-gray-200">
            <Link to="/" className="block py-2 px-4 hover:bg-blue-700">Home</Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-blue-700">About</Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-blue-700">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

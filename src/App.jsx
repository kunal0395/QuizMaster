import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

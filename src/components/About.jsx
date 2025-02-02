import { FaLightbulb, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Welcome to <span className="font-semibold text-blue-500">QuizMaster</span>, where learning meets fun! 
        Our mission is to provide an engaging quiz platform that enhances knowledge 
        while keeping things interactive.
      </p>

      {/* Features Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FaLightbulb className="text-4xl mx-auto text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Interactive Learning</h3>
          <p className="text-gray-600">Test your knowledge with challenging quizzes designed for all skill levels.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FaUsers className="text-4xl mx-auto text-green-500 mb-4" />
          <h3 className="font-semibold text-lg">Community Driven</h3>
          <p className="text-gray-600">Join a community of quiz lovers and challenge your friends.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FaAward className="text-4xl mx-auto text-yellow-500 mb-4" />
          <h3 className="font-semibold text-lg">Achievements</h3>
          <p className="text-gray-600">Earn badges and track your progress as you improve your skills.</p>
        </div>

      </div>
    </div>
  );
}

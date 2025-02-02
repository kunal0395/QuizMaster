import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react"; // Importing clock icon

const API_URL = "/api";

const QuizCategory = () => {
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p className="text-center mt-6 text-red-500">Error: {error}</p>;
  }

  if (!quizData) {
    return <p className="text-center mt-6">Loading quiz data...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Quizzes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="p-4 rounded-lg border-2 shadow-md flex justify-between items-center cursor-pointer"
          onClick={handleOnClick}
        >
          <div className="flex-1 cursor-pointer">
            <div className="flex items-center space-x-2">
              {/* Clock Icon and Duration */}
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700 font-semibold">
                {quizData.duration} min
              </span>
            </div>
            <h3 className="font-semibold text-lg">{quizData.title}</h3>
            <p
              className="text-sm text-gray-500 mt-1 mr-2"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 1,
                lineHeight: "1.5rem",
              }}
            >
              {quizData.topic}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCategory;

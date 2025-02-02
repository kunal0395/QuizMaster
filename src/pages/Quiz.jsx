import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const API_URL = "/api";

export default function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [showSolution, setShowSolution] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        setQuizData(data);
        setTimer(data.duration * 60);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (timer === 0 || submitted) {
      if (timer === 0) {
        handleSubmit();
      }
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, submitted]);

  const handleSelect = (questionId, option) => {
    if (!submitted) {
      setUserAnswers((prev) => ({
        ...prev,
        [questionId]: option,
      }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReview = () => {
    setShowReview(true);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRestart = () => {
    setSubmitted(false);
    setUserAnswers({});
    setTimer(quizData.duration * 60);
    setCurrentPage(0);
    setShowReview(false);
    setShowSolution({});
  };

  const handleHome = () => {
    navigate("/");
  };

  if (!quizData) {
    return <p className="text-center text-lg">Loading quiz data...</p>;
  }

  const calculateScore = () => {
    return Object.values(userAnswers).filter((answer) => answer.is_correct)
      .length;
  };

  const questionsPerPage = 1;
  const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = quizData.questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleToggleSolution = (questionId) => {
    setShowSolution((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-8 md:p-10">
      {/* Header section */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {quizData.title}
        </h1>
        <div className="flex items-center gap-4">
          <div
            className={`font-semibold py-2 px-4 rounded-md w-24 text-center ${
              timer <= 59 ? "bg-red-500 text-white" : "bg-gray-100 text-black"
            }`}
          >
            <p>
              {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
            </p>
          </div>
          {!submitted && (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 md:px-6 rounded-md hover:bg-blue-600 transition text-sm md:text-base"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>

      {/* Quiz Content */}
      <div>
        {currentQuestions.map((q) => {
          const selectedOption = userAnswers[q.id];
          const correctOption = q.options.find((opt) => opt.is_correct);

          return (
            <div key={q.id} className="p-4 bg-gray-50 rounded-md shadow-sm mb-6">
              <h2 className="font-semibold text-lg md:text-xl">{q.description}</h2>
              <div className="mt-2 space-y-2">
                {q.options &&
                  q.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrect = submitted && selectedOption?.is_correct;

                    return (
                      <button
                        key={option.id}
                        className={`block w-full p-2 rounded-md text-left border transition ${
                          isSelected
                            ? isCorrect
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                            : "bg-gray-100"
                        } ${submitted ? "cursor-not-allowed" : ""}`}
                        onClick={() => handleSelect(q.id, option)}
                        disabled={submitted}
                      >
                        {option.description}
                      </button>
                    );
                  })}
              </div>

              {submitted && (
                <p
                  className={`mt-2 font-semibold ${
                    selectedOption?.is_correct ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {selectedOption
                    ? selectedOption.is_correct
                      ? "✅ Correct!"
                      : `❌ Wrong! Correct Answer: ${correctOption.description}`
                    : `❌ No Answer! Correct Answer: ${correctOption.description}`}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          pageCount={Math.ceil(quizData.questions.length / questionsPerPage)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="flex flex-wrap justify-center gap-2 md:gap-4"
          pageClassName="p-2 rounded-md border cursor-pointer text-sm md:text-lg"
          pageLinkClassName="text-black"
          previousClassName="p-2 rounded-md border cursor-pointer"
          nextClassName="p-2 rounded-md border cursor-pointer"
          activeClassName="bg-blue-500 text-white"
          disabledClassName="cursor-not-allowed opacity-50"
        />
      </div>

      {/* Quiz Completed Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6 max-w-lg mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Quiz Completed</h2>
            <p className="mt-2 text-lg">
              You scored {calculateScore()} out of {quizData.questions.length}!
            </p>
            <div className="flex flex-wrap justify-between mt-6 gap-3">
              <button onClick={handleReview} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Review Answers
              </button>
              <button onClick={handleRestart} className="bg-yellow-500 text-white py-2 px-4 rounded-md">
                Restart
              </button>
              <button onClick={handleHome} className="bg-gray-500 text-white py-2 px-4 rounded-md">
                Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

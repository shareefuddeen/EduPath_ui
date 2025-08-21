import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Quiz = () => {
  const api_url = import.meta.env.VITE_API_URL
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    axiosInstance
      .get(`${api_url}/api/quizes/`)
      .then((res) => setQuizData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!quizData.length) return <p>Loading quiz...</p>;

  const allQuestions = quizData.flatMap((quiz) =>
    quiz.questions.map((q) => ({
      quizTitle: quiz.title,
      ...q
    }))
  );

  const currentQuestion = allQuestions[currentIndex];

  const handleOptionSelect = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = async () => {
    setDirection(1);
    if (currentIndex < allQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const formattedAnswers = Object.entries(answers).map(
        ([questionId, optionId]) => ({
          question_id: parseInt(questionId),
          option_id: optionId
        })
      );

      try {
        const res = await axiosInstance.post(
          `${api_url}/api/ai-recommend/`,
          { answers: formattedAnswers }
        );
        setRecommendation(res.data.recommendation);
        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Recommendation</h2>
        <p className="text-lg">{recommendation}</p>
      </div>
    );
  }

  return (
    <>
      
      <Navbar/>
    
    <div className="max-w-2xl mx-auto p-6">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentQuestion.id}
          custom={direction}
          initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-lg font-bold mb-2 text-purple-600">
            {currentQuestion.quizTitle}
          </h2>
          <p className="text-lg font-semibold">{currentQuestion.text}</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() =>
                  handleOptionSelect(currentQuestion.id, option.id)
                }
                className={`border rounded-lg px-4 py-2 text-left transition-colors ${
                  answers[currentQuestion.id] === option.id
                    ? "bg-gray-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBack}
              className={`px-5 py-2 rounded-lg ${
                currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-600 hover:bg-gray-400 text-white"
              }`}
              disabled={currentIndex === 0}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
              disabled={!answers[currentQuestion.id]}
            >
              {currentIndex < allQuestions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="mt-4 text-center text-gray-500">
        Question {currentIndex + 1} of {allQuestions.length}
      </p>
    </div>
    </>
  );
};

export default Quiz;

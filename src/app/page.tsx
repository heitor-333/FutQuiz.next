"use client";

import { useState } from "react";
import { quizData } from "@/types/quiz";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = quizData[currentQuestion];

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const isEnd = currentQuestion >= quizData.length;

  if (isEnd) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-700">FIM</h1>
          <button
            onClick={handleReset}
            className="mt-4 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center space-y-6 relative">
        {/* Header centralizado com botão X à direita */}
        <div className="flex justify-between items-center mb-2">
          <div className="w-full text-center font-semibold text-lg text-gray-600">
            Quiz de Futebol
          </div>
          <button
            onClick={handleReset}
            className="absolute right-5 top-3 text-gray-400 hover:text-red-500 font-bold text-lg"
            title="Reiniciar Quiz"
          >
            ✕
          </button>
        </div>

        {/* Pergunta */}
        <h1 className="text-2xl font-bold">{question.question}</h1>

        {/* Respostas */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.text;
            const showColor =
              selectedAnswer !== null
                ? option.isCorrect
                  ? "bg-green-400 text-white"
                  : isSelected
                  ? "bg-red-400 text-white"
                  : "bg-gray-200"
                : "bg-gray-200 hover:bg-gray-300";

            return (
              <button
                key={option.text}
                onClick={() => handleAnswerClick(option.text)}
                className={`w-full p-3 rounded-md font-medium transition-all ${showColor}`}
                disabled={selectedAnswer !== null}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        {/* Botão Confirmar */}
        {selectedAnswer && (
          <button
            onClick={handleNext}
            className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Confirmar
          </button>
        )}

        {/* Rodapé */}
        <div className="text-sm text-gray-500 pt-4 border-t border-gray-300">
          {currentQuestion + 1} de {quizData.length} perguntas
        </div>
      </div>
    </div>
  );
};

export default Page;
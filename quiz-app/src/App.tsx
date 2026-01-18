import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool MarkUp Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correctAnswer: 3
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctAnswer: 0
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useContext", "useState", "useRef"],
    correctAnswer: 2
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectOption(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">
          Quiz Application
        </h2>

        {showResult ? (
          <div>
            <h3 className="text-lg font-medium mb-2">
              Quiz Completed
            </h3>
            <p className="mb-4">
              Your Score: <b>{score}</b> / {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h3 className="text-lg font-medium mb-4">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-2 text-left">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 p-2 border rounded cursor-pointer"
                >
                  <input
                    type="radio"
                    name="option"
                    checked={selectedOption === index}
                    onChange={() => setSelectOption(index)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`mt-4 w-full py-2 rounded text-white ${
                selectedOption === null
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

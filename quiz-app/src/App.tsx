import { useState } from "react";

const questions = [
  {
    question: "What does HTML Stands for?",
    options: [
      "Hyper Tool MarkUp Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctanswer: 1
  }
];

function App(){
  const [currentQuestion, setCurrentOuestion] = useState(0)
  const[selectedOption, setSelectOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if(selectedOption === questions[currentQuestion]. correctanswer) setScore(score + 1);

    if(currentQuestion + 1 < questions.length){
      setCurrentOuestion(currentQuestion + 1);
      setSelectOption(null);
    } else{
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentOuestion(0);
    setSelectOption(null);
    setScore(0);
    setShowResult(false);
  };


  return(
    <>
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

            <p className="mb-4 text-gray-700">
              Your Score:{" "}
              <span className="font-bold">
                {score}
              </span>{" "}
              / {questions.length}
            </p>

            <button
              onClick={restartQuiz}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
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
                  className="flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-gray-100"
                >
                  <input
                    type="radio"
                    name="option"
                    checked={selectedOption === index}
                    onChange={() => setSelectOption(index)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`mt-4 w-full py-2 rounded text-white
                ${
                  selectedOption === null
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;
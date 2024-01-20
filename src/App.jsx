import { useRef, useState } from "react";
import StartCard from "./components/StartCard.jsx";
import { QUESTIONS } from "./questions.js";
import QuestionCard from "./components/QuestionCard.jsx";
import TimerContext from "./context/TimerContext.jsx";
import FinalCard from "./components/FinalCard.jsx";

function App() {
  const [timer, setTimer] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);
  const questionsAnswered = useRef([]);
  const prevQuestion = useRef(-1);
  return (
    <TimerContext.Provider value={timer}>
      <section
        className={`grid place-items-center w-screen h-screen font-roboto overflow-hidden relative`}
      >
        <StartCard
          onStart={(time) => {
            setTimer(time);
          }}
        />
        {timer > 0
          ? QUESTIONS.map((question, index) => (
              <QuestionCard
                hasFinished={hasFinished}
                questionsAnswered={questionsAnswered.current}
                key={index}
                questionNumber={index}
                activeQuestion={activeQuestion}
                prevQuestion={prevQuestion.current}
                question={question}
                onQuestionEnd={(question) => {
                  questionsAnswered.current.push(question);
                  prevQuestion.current = activeQuestion;
                  setActiveQuestion((prevQuestion) => prevQuestion + 1);
                }}
                onReturnToFinalCard={() => {
                  prevQuestion.current = activeQuestion;
                  setActiveQuestion(QUESTIONS.length);
                }}
              ></QuestionCard>
            ))
          : ""}
        <FinalCard
          activeQuestion={activeQuestion}
          onQuestionChange={(newActiveQuestion) => {
            setHasFinished(true);
            prevQuestion.current = activeQuestion;
            setActiveQuestion(newActiveQuestion);
          }}
          questionsAnswered={questionsAnswered.current}
          onRestart={()=> {
              setTimer(0)
              prevQuestion.current = activeQuestion
              setActiveQuestion(0)
              setHasFinished(false)
              questionsAnswered.current = []
          }}
        />
      </section>
    </TimerContext.Provider>
  );
}

export default App;

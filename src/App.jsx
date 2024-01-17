import { useRef, useState } from "react";
import StartCard from "./components/StartCard.jsx";
import { QUESTIONS } from "./questions.js";
import QuestionCard from "./components/QuestionCard.jsx";
import TimerContext from "./context/TimerContext.jsx";
import FinalCard from "./components/FinalCard.jsx";

function App() {
  const [timer, setTimer] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const questionsAnswered = useRef([]);
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
                key={index}
                questionNumber={index}
                activeQuestion={activeQuestion}
                question={question}
                onQuestionEnd={(question) => {
                  questionsAnswered.current.push(question);
                  setActiveQuestion((prevQuestion) => prevQuestion + 1);
                }}
              ></QuestionCard>
            ))
          : ""}
          <FinalCard questionsAnswered={questionsAnswered.current}/>
      </section>
    </TimerContext.Provider>
  );
}

export default App;

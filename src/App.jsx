import { useRef, useState } from "react";
import StartCard from "./components/StartCard.jsx";
import { QUESTIONS } from "./questions.js";
import QuestionCard from "./components/QuestionCard.jsx";

function App() {
  const [timer, setTimer] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const questionsAnswered = useRef([]);
  return (
    <section
      className={`grid place-items-center w-screen h-screen font-roboto`}
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
              index={index}
              activeQuestion={activeQuestion}
              question={QUESTIONS[index]}
              onClick={() => {
                setActiveQuestion((prevQuestion) => prevQuestion + 1);
              }}
            ></QuestionCard>
          ))
        : ""}
    </section>
  );
}

export default App;

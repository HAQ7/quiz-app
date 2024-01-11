import Card from './Card.jsx';
import Button from './Button.jsx';
import LoadingBorder from './LoadingBorder.jsx';
import { useContext, useEffect, useRef } from 'react';
import TimerContext from '../context/TimerContext.jsx';

export default function QuestionCard({
  questionNumber,
  activeQuestion,
  question,
}) {
  const checkAnswer = (answer) => {
    if (answer == question.answer) {
    }
  };
  const time = useRef(useContext(TimerContext));
  const TimerInterval = useRef({});
  useEffect(() => {
    if (questionNumber === activeQuestion) {
      setTimeout(() => {
        TimerInterval.current = setInterval(() => {
          time.current--;
          console.log(time.current);
          if (time.current === 0) {
            console.log('gg');
            clearInterval(TimerInterval.current);
          }
        }, 1000);
      }, 1000);
    }
  }, []);
  return (
    <Card
      className={`${
        questionNumber === activeQuestion && window.innerWidth > 1024
          ? 'animate-sendCardToFrontDesktop'
          : questionNumber === activeQuestion && window.innerWidth < 1024
          ? 'animate-sendCardToFrontMobile'
          : questionNumber + 1 === activeQuestion && window.innerWidth > 1024
          ? 'animate-sendCardToBackDesktop'
          : questionNumber + 1 === activeQuestion && window.innerWidth < 1024
          ? 'animate-sendCardToBackMobile'
          : 'hidden'
      }`}
    >
      <div
        className={`grid place-items-center rounded-xl w-full h-full overflow-hidden p-4`}
      >
        <LoadingBorder
          questionNumber={questionNumber}
          activeQuestion={activeQuestion}
        >
          <h1 className={`font-bold sm:text-2xl text-lg text-center`}>
            {question.question + ''}
          </h1>
          <div className={`flex lg:flex-row flex-col xs:gap-5 gap-2`}>
            {question.choices.map((choice, key) => (
              <Button
                key={key}
                text={choice}
                onClick={() => {
                  checkAnswer(choice);
                }}
              ></Button>
            ))}
          </div>
        </LoadingBorder>
      </div>
    </Card>
  );
}

import Card from "./Card.jsx";
import Button from "./Button.jsx";
import LoadingBorder from "./LoadingBorder.jsx";
import React, { useContext, useEffect, useRef, useState } from "react";
import TimerContext from "../context/TimerContext.jsx";
import { motion } from "framer-motion";
import check from "../assets/check.svg";
import x from "../assets/x.svg";
import { QUESTIONS } from "../questions.js";
import returnArrow from "../assets/returnArrow.svg";

export default function QuestionCard({
  questionNumber,
  activeQuestion,
  question,
  onQuestionEnd,
  questionsAnswered,
  hasFinished,
  onReturnToFinalCard,
  prevQuestion,
}) {
  const [pickedAnswer, setPickedAnswer] = useState({});
  const [isLoadingActive, setIsLoadingActive] = useState(false);
  const [readyToReveal, setReadyToReveal] = useState(false);
  const time = useRef(useContext(TimerContext));
  const timerInterval = useRef(undefined);
  const handlePickedAnswer = (answer) => {
    setPickedAnswer({
      answer: answer,
      isItCorrect: answer === question.answer,
    });
    setIsLoadingActive(false);
    clearInterval(timerInterval.current);
    setTimeout(() => {
      setReadyToReveal(true);
    }, 2000);
    setTimeout(() => {
      onQuestionEnd({
        question: question.question,
        chosenAnswer: answer,
        correctAnswer: question.answer,
      });
    }, 4000);
  };

  useEffect(() => {
    if (questionNumber === activeQuestion && !hasFinished) {
      setTimeout(() => {
        setIsLoadingActive(true);
        if (!timerInterval.current) {
          timerInterval.current = setInterval(() => {
            time.current--;
            if (time.current === 0) {
              setIsLoadingActive(false);
              clearInterval(timerInterval.current);
              setReadyToReveal(true);
              setTimeout(() => {
                onQuestionEnd({
                  question: question.question,
                  chosenAnswer: "",
                  correctAnswer: question.answer,
                });
              }, 2000);
            }
          }, 1000);
        }
      }, 3000);
    }
  }, [activeQuestion]);

  let cardAnimation;

  if (activeQuestion === questionNumber) {
    cardAnimation =
      window.innerWidth >= 1024
        ? "animate-sendCardToFrontDesktop"
        : "animate-sendCardToFrontMobile";
  } else if (prevQuestion === questionNumber) {
    cardAnimation =
      window.innerWidth >= 1024
        ? "animate-sendCardToBackDesktop"
        : "animate-sendCardToBackMobile";
  } else {
    cardAnimation = "hidden";
  }

  return (
    <Card className={cardAnimation}>
      <motion.div
        animate={questionNumber <= questionsAnswered.length || questionNumber === activeQuestion ? "visible" : ""}
        className={` rounded-xl w-full h-full overflow-hidden xs:p-4 p-2`}
      >
        <LoadingBorder isLoadingActive={isLoadingActive}>
          <div
            className={`grid place-items-center font-bold sm:text-2xl xs:text-xl text-md text-center p-1`}
          >
            {/*two different titles one for time is up the other is the default*/}
            <motion.h1
              initial={{
                opacity: 0,
                y: -30,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              animate={
                time.current === 0
                  ? {
                      opacity: 0,
                      y: -30,
                      transition: {
                        duration: 0.25,
                        delay: 0,
                      },
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 1,
                type: "spring",
                stiffness: 1000,
                bounce: 0.25,
                damping: 20,
              }}
            >
              {question.question + ""}
            </motion.h1>
            {time.current === 0 && (
              <motion.h1
                initial={{
                  opacity: 0,
                  y: -30,
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.25,
                  delay: 0.25,
                  type: "spring",
                  stiffness: 1000,
                  bounce: 0.25,
                  damping: 20,
                }}
                className={`absolute`}
              >
                Time is up !
              </motion.h1>
            )}
          </div>

          <motion.div
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 2 },
              },
            }}
            className={`flex lg:flex-row flex-col xs:gap-5 gap-2 xs:text-sm text-xs`}
          >
            {question.choices.map((choice, key) => (
              <motion.div
                key={key}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/*here we are checking if user came from final card or not if yes then only display correct and chosen answers*/}
                {(((QUESTIONS.length !== questionsAnswered.length ||
                  activeQuestion !== questionNumber) &&
                  !hasFinished) ||
                  (hasFinished &&
                    (choice === question.answer ||
                      choice === pickedAnswer.answer))) && (
                  <Button
                    disabled={
                      (choice !== pickedAnswer.answer && pickedAnswer.answer) ||
                      !isLoadingActive
                    }
                    onClick={() => {
                      handlePickedAnswer(choice);
                    }}
                  >
                    {choice === pickedAnswer.answer && (
                      <LoadingBorder
                        isLoadingActive={true}
                        loadingSmall={true}
                        time={0.5}
                      >
                        <motion.span
                          className={"grid place-items-center"}
                          animate={{
                            color:
                              readyToReveal && pickedAnswer.isItCorrect
                                ? "#14532D"
                                : readyToReveal
                                ? "#7F1D1D"
                                : "#000",
                          }}
                        >
                          <motion.img
                            initial={{ y: 100, rotate: 180 }}
                            animate={
                              readyToReveal
                                ? {
                                    y: window.innerWidth > 1024 ? 40 : 30,
                                    rotate: 0,
                                  }
                                : {}
                            }
                            className={"absolute w-[30px]"}
                            src={pickedAnswer.isItCorrect ? check : x}
                            alt=""
                          />
                          {choice}
                        </motion.span>
                      </LoadingBorder>
                    )}{" "}
                    {choice !== pickedAnswer.answer && (
                      <motion.span
                        className={"grid place-items-center"}
                        animate={{
                          color:
                            readyToReveal && choice === question.answer
                              ? "#14532D"
                              : "#000",
                        }}
                      >
                        <motion.img
                          initial={{ y: 100, rotate: 180 }}
                          animate={
                            readyToReveal && choice === question.answer
                              ? {
                                  y: window.innerWidth > 1024 ? 40 : 30,
                                  rotate: 0,
                                }
                              : {}
                          }
                          className={"absolute w-[30px]"}
                          src={check}
                          alt=""
                        />
                        {choice}
                      </motion.span>
                    )}
                  </Button>
                )}{" "}
              </motion.div>
            ))}
            {hasFinished && (
              <Button
                text={"Return"}
                hoverText={"Confirm?"}
                onClick={onReturnToFinalCard}
              >
                <img className={`w-8`} src={returnArrow} alt="" />
              </Button>
            )}
          </motion.div>
        </LoadingBorder>
      </motion.div>
    </Card>
  );
}

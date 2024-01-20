import Card from "./Card.jsx";
import { QUESTIONS } from "../questions.js";
import Button from "./Button.jsx";
import { m, motion } from "framer-motion";
import plus from "../assets/plus.svg";
import checkPurple from "../assets/checkPurple.svg";
import returnArrow from '../assets/returnArrow.svg'
export default function FinalCard({
  questionsAnswered,
  onQuestionChange,
  activeQuestion,
    onRestart
}) {
  const getCorrectAnswerNumber = () => {
    let correctAnswerNumber = 0;
    questionsAnswered.forEach((question) => {
      if (question.chosenAnswer === question.correctAnswer) {
        correctAnswerNumber++;
      }
    });
    return correctAnswerNumber;
  };
  let numStr = Math.floor(
    (getCorrectAnswerNumber() * 100) / QUESTIONS.length,
  ).toString();
  numStr = numStr.length < 3 ? "0" + numStr : numStr;

  // Get the first digit
  const firstDigit = parseInt(numStr.charAt(0));

  const middleIndex = Math.floor(numStr.length / 2);

  // Get the middle digit
  const middleDigit = parseInt(numStr.charAt(middleIndex));

  // Get the last digit
  const lastDigit =
    Math.floor((getCorrectAnswerNumber() * 100) / QUESTIONS.length) % 10;

  let cardAnimation;
  switch (QUESTIONS.length) {
    case activeQuestion:
      cardAnimation =
        window.innerWidth >= 1024
          ? "animate-sendCardToFrontDesktop"
          : "animate-sendCardToFrontMobile";
      break;
    case questionsAnswered.length:
      cardAnimation =
        window.innerWidth >= 1024
          ? "animate-sendCardToBackDesktop"
          : "animate-sendCardToBackMobile";
      break;
    default:
      cardAnimation = "hidden";
  }
  return (
    <Card className={cardAnimation}>
      <motion.div
        animate={questionsAnswered.length === QUESTIONS.length ? "visible" : ""}
        transition={{ delayChildren: 1 }}
        className={`grid place-items-center w-full h-full`}
      >
        <div
          className={`flex sm:flex-row flex-col justify-center items-center font-bold text-4xl gap-20`}
        >
          <div className={`grid place-items-center`}>
            <motion.div
              className={`flex`}
              initial={{ y: 30, opacity: 0 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delayChildren: 0.5 },
                },
              }}
            >
              <div className={`overflow-hidden flex gap-0`}>
                <motion.span
                  initial={{ y: "100%" }}
                  variants={{
                    visible: {
                      y: `-${getCorrectAnswerNumber() + 1}00%`,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 30,
                        bounce: 2,
                        damping: 10,
                        mass: 1.5
                      },
                    },
                  }}
                  className={`flex flex-col w-10 h-9 items-center text-center mr-2`}
                >
                  <span className={`opacity-0 h-9 `}>0</span>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, key) => (
                    <span className={`h-9`} key={key}>
                      {num}
                    </span>
                  ))}
                </motion.span>
              </div>
              <span>/<span className={`m-2`}></span>{QUESTIONS.length}</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              variants={{ visible: { x: 0, opacity: 1 } }}
            >
              Correct <img className={`w-10 inline`} src={checkPurple} alt="" />
            </motion.span>
          </div>
          <div className={"flex flex-col justify-center items-center"}>
            <motion.div
              className={`flex`}
              initial={{ y: 30, opacity: 0 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2.5, delayChildren: 2 },
                },
              }}
            >
              <div className={`overflow-hidden flex gap-0`}>
                <motion.span
                  variants={{
                    visible: {
                      y: `-${firstDigit}00%`,
                      transition: {
                        type: "spring",
                        stiffness: 30,
                        bounce: 1,
                        damping: 10,
                        mass: 1
                      },
                    },
                  }}
                  className={`flex flex-col w-5 h-9 items-center text-center`}
                >
                  <span className="h-9 opacity-0">0</span>
                  <span className="h-9">1</span>
                </motion.span>
                <motion.span
                  variants={{
                    visible: {
                      y: `-${
                        middleDigit === 0 && firstDigit !== 1
                          ? middleDigit
                          : middleDigit + 1
                      }00%`,
                      transition: {
                        type: "spring",
                        stiffness: 30,
                        bounce: 1,
                        damping: 10,
                        mass: 1
                      },
                    },
                  }}
                  className={`flex flex-col w-5 h-9 items-center text-center`}
                >
                  <span className={`h-9 opacity-0`}>0</span>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, key) => (
                    <span className={`h-9`} key={key}>
                      {num}
                    </span>
                  ))}
                </motion.span>
                <motion.span
                  variants={{
                    visible: {
                      y: `-${lastDigit + 1}00%`,
                      transition: {
                        type: "spring",
                        stiffness: 30,
                        bounce: 1,
                        damping: 10,
                        mass: 1
                      },
                    },
                  }}
                  className={`flex flex-col w-5 h-9 items-center text-center`}
                >
                  <span className={`h-9 opacity-0`}>0</span>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, key) => (
                    <span className={`h-9`} key={key}>
                      {key}
                    </span>
                  ))}
                </motion.span>
              </div>
              <span>%</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              variants={{
                visible: { x: 0, opacity: 1, transition: { delay: 2.5 } },
              }}
            >
              Accuracy <img className={`w-10 inline`} src={plus} alt="" />
            </motion.span>
          </div>
        </div>
        <div>
            <motion.div initial={{opacity: 0, y:-30}} variants={{visible: {opacity: 1, y: 0, transition:{delay: 2.5}}}} className={`font-bold text-3xl text-center`}>Questions:</motion.div>
          <motion.div
              className="w-full flex flex-wrap justify-center pt-2 gap-0.5"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 3,
                    damping: 4,
                  },
                },
              }}
          >
            {questionsAnswered.map((question, key) => (
                <Button
                    key={key}
                    text={key + 1}
                    hoverText={"view?"}
                    isCorrect={
                      question.chosenAnswer === question.correctAnswer
                          ? "CORRECT"
                          : "INCORRECT"
                    }
                    onClick={() => {
                      onQuestionChange(key);
                    }}
                ></Button>
            ))}
          </motion.div>
        </div>

        {/*<motion.span initial={{opacity: 0, y:-30}} variants={{visible: {opacity: 1, y: 0, transition:{delay: 5}}}} className={`font-bold`}>Thanks for trying the React Quiz :)</motion.span>*/}
      </motion.div>
    </Card>
  );
}

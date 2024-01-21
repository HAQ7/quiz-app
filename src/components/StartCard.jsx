import Card from "./Card.jsx";
import play from "../assets/play.svg";
import playFilled from "../assets/playFilled.svg";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import { motion } from "framer-motion";
import ReactLogo from "./ReactLogo.jsx";

export default function StartCard({ onStart }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [readyToSendBack, isReadyToSendBack] = useState(false);
  const timeChosen = useRef(0);

  useEffect(() => {
    if (hasStarted) {
      setTimeout(() => {
        isReadyToSendBack(true);
        onStart(timeChosen.current);
      }, 500);
    }
  }, [hasStarted]);

  return (
    <>
      <Card
        className={`z-10 ${
          readyToSendBack && window.innerWidth >= 1024
            ? "animate-sendCardToBackDesktop"
            : readyToSendBack && window.innerWidth <= 1024
            ? "animate-sendCardToBackMobile"
            : ""
        }`}
      >
        <motion.div
          animate={"visible"}
          className={`flex rounded-xl flex-col items-center shadow-none justify-center pt-4 gap-5 w-full h-full`}
        >
          <ReactLogo hasStarted={hasStarted} />
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{delay:1}}
            className={`font-bold text-4xl text-center `}
          >
            React Quiz
          </motion.h1>
          <motion.div
            className={` flex lg:flex-row flex-col gap-5`}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.1 },
              },
            }}
          >
            <Button
              text={`Easy`}
              hoverText={`Start ?`}
              disabled={hasStarted}
              onClick={() => {
                setHasStarted(true);
                timeChosen.current = 20;
              }}
            >
              <span className={`relative`}>
                <img className={`w-10`} src={play} alt="" />
                <img
                  className={`w-10 absolute top-0 opacity-0 scale-0 transition duration-300 group-hover:opacity-100 group-hover:scale-100`}
                  src={playFilled}
                  alt=""
                />
              </span>
            </Button>
            <Button
              text={`Medium`}
              hoverText={`Start ?`}
              disabled={hasStarted}
              onClick={() => {
                setHasStarted(true);
                timeChosen.current = 15;
              }}
            >
              <span className={`relative`}>
                <img className={`w-10`} src={play} alt="" />
                <img
                  className={`w-10 absolute top-0 opacity-0 scale-0 transition duration-300 group-hover:opacity-100 group-hover:scale-100`}
                  src={playFilled}
                  alt=""
                />
              </span>
            </Button>
            <Button
              text={`Hard`}
              hoverText={`Start ?`}
              disabled={hasStarted}
              onClick={() => {
                setHasStarted(true);
                timeChosen.current = 10;
              }}
            >
              <span className={`relative`}>
                <img className={`w-10`} src={play} alt="" />
                <img
                  className={`w-10 absolute top-0 opacity-0 scale-0 transition duration-300 group-hover:opacity-100 group-hover:scale-100`}
                  src={playFilled}
                  alt=""
                />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </Card>
      {!readyToSendBack && (
        <Card
          shadow={!hasStarted}
          className={`absolute transition duration-500 ${
            hasStarted ? "rotate-0 shadow-none" : "rotate-6 "
          }`}
        />
      )}
      {!readyToSendBack && (
        <Card
          shadow={!hasStarted}
          className={`absolute transition duration-500 ${
            hasStarted ? "rotate-0 shadow-none" : "-rotate-6 "
          }`}
        />
      )}
    </>
  );
}

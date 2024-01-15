import { useContext } from "react";
import TimerContext from "../context/TimerContext";
import { motion } from "framer-motion";

export default function LoadingBorder({
    loadingSmall = false,
  children,
  isLoadingActive,
  time = useContext(TimerContext) / 4,
}) {
  return (
    <div
      className={`grid place-items-center rounded-xl w-full h-full overflow-hidden`}
    >
      <div
        className={`grid w-full h-full place-items-center bg-[#4B11AD] ${loadingSmall ? 'p-1' : 'p-2'} relative rounded-3xl group border-gray-200 `}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={isLoadingActive ? { x: "-20px" } : {x: [null]}}
          transition={{ duration: time, ease: "linear" }}
          className={` w-full h-5 bg-gray-200 top-0 absolute`}
        ></motion.div>
        <motion.div
          initial={{ y: "-100%" }}
          animate={isLoadingActive ? { y: "-20px" } : {y: [null]}}
          transition={{ duration: time, ease: "linear", delay: time }}
          className={` bg-gray-200 w-5 h-full absolute right-0`}
        ></motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={isLoadingActive ? { x: "20px" } : {x: [null]}}
          transition={{ duration: time, ease: "linear", delay: time * 2 }}
          className={` bg-gray-200 w-full h-5 absolute bottom-0`}
        ></motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={isLoadingActive ? { y: "20px" } : {y: [null]}}
          transition={{ duration: time, ease: "linear", delay: time * 3 }}
          className={` bg-gray-200 w-5 h-full absolute left-0  `}
        ></motion.div>
        <div
          className={`bg-gray-200 w-full h-full flex flex-col items-center shadow-none justify-center gap-5 ${loadingSmall ? "rounded-[20px]" : "rounded-2xl"} z-10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

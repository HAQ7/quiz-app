import { useContext, useEffect, useState } from 'react';
import TimerContext from '../context/TimerContext';

export default function LoadingBorder({
  children,
  questionNumber,
  activeQuestion,
}) {
  const [isLoadingActive, setIsLoadingActive] = useState(false);
  useEffect(() => {
    if (questionNumber === activeQuestion) {
      setTimeout(() => {
        setIsLoadingActive(true);
      }, 1000);
    }
  }, []);
  const time =
    useContext(TimerContext) === 20
      ? 'duration-[5s]'
      : useContext(TimerContext) === 15
      ? 'duration-[3.75s]'
      : 'duration-[2.5s]';
  const delay1 =
    useContext(TimerContext) === 20
      ? ' delay-[5s]'
      : useContext(TimerContext) === 15
      ? ' delay-[3.75s]'
      : ' delay-[2.5s]';
  const delay2 =
    useContext(TimerContext) === 20
      ? ' delay-[10s]'
      : useContext(TimerContext) === 15
      ? ' delay-[7.5s]'
      : ' delay-[5s]';
  const delay3 =
    useContext(TimerContext) === 20
      ? ' delay-[15s]'
      : useContext(TimerContext) === 15
      ? ' delay-[11.25s]'
      : ' delay-[7.5s]';
  return (
    <div
      className={`grid place-items-center rounded-xl w-full h-full overflow-hidden`}
    >
      <div
        className={`grid w-full h-full place-items-center bg-[#4B11AD] p-2 relative rounded-3xl group border-gray-200 `}
      >
        <div
          className={
            time +
            ` w-full h-5 bg-gray-200 top-0 absolute -translate-x-[100%] transition ease-linear ${
              isLoadingActive ? 'translate-x-[-20px] ' : ''
            }`
          }
        ></div>
        <div
          className={
            time + delay1 + 
            ` bg-gray-200 w-5 h-full absolute right-0 -translate-y-[100%] transition ease-linear ${
              isLoadingActive ? 'translate-y-[-20px] ' : ''
            }`
          }
        ></div>
        <div
          className={
            time + delay2 + 
            ` bg-gray-200 w-full h-5 absolute bottom-0 translate-x-[100%] transition ease-linear ${
              isLoadingActive ? 'translate-x-[20px] ' : ''
            }`
          }
        ></div>
        <div
          className={
            time + delay3 +
            ` bg-gray-200 w-5 h-full absolute left-0 translate-y-[100%] transition ease-linear ${
              isLoadingActive ? 'translate-y-[20px] ' : ''
            }`
          }
        ></div>
        <div
          className={`bg-gray-200 w-full h-full flex flex-col items-center shadow-none justify-center gap-5 rounded-2xl z-10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

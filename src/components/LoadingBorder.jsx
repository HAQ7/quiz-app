export default function LoadingBorder({ children }) {
  return (
    <div className={`grid place-items-center rounded-xl w-full h-full overflow-hidden`}>
      <div
        className={`grid w-full h-full place-items-center bg-[#4B11AD] p-2 relative rounded-3xl group border-gray-200`}
      >
        <div
          className={`w-full h-5 bg-gray-200 top-0 absolute -translate-x-[100%]`}
        ></div>
        <div
          className={`bg-gray-200 w-5 h-full absolute right-0 -translate-y-[100%]`}
        ></div>
        <div
          className={`bg-gray-200 w-full h-5 absolute bottom-0 translate-x-[100%]`}
        ></div>
        <div
          className={`bg-gray-200 w-5 h-full absolute left-0 translate-y-[100%]`}
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

export default function Button({ onClick, children, text, hoverText }) {
  return (
    <div
      className={`lg:w-36 xs:min-w-[8rem] w-[6rem] lg:h-36 xs:h-[8rem] h-[6rem] p-3 bg-gray-200 grid place-items-center rounded-3xl transition-all duration-300 shadow-hq7-neumorphism-concave font-bold`}
    >
      <button
        onClick={onClick}
        className="w-full h-full group bg-gray-200  rounded-3xl transition duration-300 shadow-hq7-neumorphism focus:shadow-none flex-col flex justify-center items-center"
      >
        <span className={`grid place-items-center`}>
          <span
            className={`transition duration-300 xs:text-lg text-sm  ${(hoverText && window.innerWidth > 1024) ? `group-hover:opacity-0 group-hover:-translate-y-5` : ''}`}
          >
            {text}
          </span>
            {(hoverText && window.innerWidth > 1024) && <span
            className={`absolute opacity-0 transition duration-300 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0`}
          >
            {hoverText}
          </span>}
        </span>
        {children}
      </button>
    </div>
  );
}

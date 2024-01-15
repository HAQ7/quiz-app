export default function Button({
  onClick,
  children,
  text,
  hoverText,
  disabled = false,
}) {
  return (
    <div
      className={`lg:w-44 xs:min-w-[12rem] w-[10rem] lg:h-40 xs:h-[9rem] h-[8rem] p-3 bg-gray-200 grid place-items-center rounded-3xl transition-all duration-300 shadow-hq7-neumorphism-concave font-bold`}
    >
      <button
          disabled={disabled}
        onClick={onClick}
        className={`w-full h-full group bg-gray-200  rounded-3xl transition duration-300 shadow-hq7-neumorphism flex-col flex justify-center items-center overflow-hidden relative p-1 ${
          disabled ? "shadow-none" : ""
        }`}
      >
        <span className={`grid place-items-center`}>
          <span
            className={`transition duration-300 xs:text-lg text-sm  ${
              hoverText && window.innerWidth > 1024
                ? `group-hover:opacity-0 group-hover:-translate-y-5`
                : ""
            }`}
          >
            {text}
          </span>
          {hoverText && window.innerWidth > 1024 && (
            <span
              className={`absolute opacity-0 transition duration-300 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0`}
            >
              {hoverText}
            </span>
          )}
        </span>
        {children}
      </button>
    </div>
  );
}

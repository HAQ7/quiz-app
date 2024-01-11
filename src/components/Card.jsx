export default function Card({ children, className, shadow = true }) {
  return (
    <section
      className={
        `lg:w-[66rem] xs:w-[90%] w-[95%] lg:max-w-none max-w-[28rem] lg:h-96 xs:h-[90%] h-[95%] bg-gray-200 rounded-3xl border-8 border-w-5 h-full absolute ${
          shadow ? `shadow-hq7-normal` : ``
        } ` + className
      }
    >
      <div
        className={`shadow-hq7-neumorphism-concave w-full h-full rounded-3xl`}
      >
        {children}
      </div>
    </section>
  );
}

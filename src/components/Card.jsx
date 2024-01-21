export default function Card({ children, className, shadow = true }) {
  return (
    <section
      className={
        `lg:w-[66rem] xs:w-[90%] w-screen lg:max-w-none max-w-[28rem] lg:h-96 xs:h-[90%] h-screen bg-gray-200 rounded-3xl border-8 border-w-5 absolute top-0 md:top-auto ${
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

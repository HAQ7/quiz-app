import Card from "./Card.jsx";
import Button from "./Button.jsx";
import LoadingBorder from "./LoadingBorder.jsx";

export default function QuestionCard({ index, activeQuestion, question }) {
  return (
    <Card
      className={`${
        index === activeQuestion && window.innerWidth > 1024
          ? "animate-sendCardToFrontDesktop"
          : index === activeQuestion && window.innerWidth < 1024
          ? "animate-sendCardToFrontMobile"
          : index + 1 === activeQuestion && window.innerWidth > 1024
          ? "animate-sendCardToBackDesktop"
          : index + 1 === activeQuestion && window.innerWidth < 1024
          ? "animate-sendCardToBackMobile"
          : "hidden"
      }`}
    >
      <div className={`grid place-items-center rounded-xl w-full h-full overflow-hidden p-4`}>
        <LoadingBorder>
          <h1 className={`font-bold sm:text-2xl text-lg text-center`}>
            {question.question + ""}
          </h1>
          <div className={`flex lg:flex-row flex-col xs:gap-5 gap-2`}>
            {question.choices.map((choice, key) => (
              <Button key={key} text={choice}></Button>
            ))}
          </div>
        </LoadingBorder>
      </div>
    </Card>
  );
}

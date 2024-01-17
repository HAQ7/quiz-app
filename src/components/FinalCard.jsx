import Card from "./Card.jsx";
import { QUESTIONS } from "../questions.js";

export default function FinalCard({ questionsAnswered }) {
  let cardAnimation;
  switch (questionsAnswered.length) {
    case QUESTIONS.length:
      cardAnimation =
        window.innerWidth >= 1024
          ? "animate-sendCardToFrontDesktop"
          : "animate-sendCardToFrontMobile";
      break;
    default:
      cardAnimation = "hidden";
  }
  return <Card className={cardAnimation}></Card>;
}

import Card from './Card.jsx';
import { QUESTIONS } from '../questions.js';
import Button from './Button.jsx';
import {motion} from 'framer-motion'

export default function FinalCard({ questionsAnswered }) {
  let cardAnimation;
  switch (questionsAnswered.length) {
    case QUESTIONS.length:
      cardAnimation =
        window.innerWidth >= 1024
          ? 'animate-sendCardToFrontDesktop'
          : 'animate-sendCardToFrontMobile';
      break;
    default:
      cardAnimation = 'hidden';
  }
  return <Card className={cardAnimation}>
    <motion.div className='flex' animate={questionsAnswered.length === QUESTIONS.length ? 'visible' : ''}>
        {questionsAnswered.map((question, key) => 
            <Button key={key} isSmall={true}>{key + 1}</Button>
        )}
    </motion.div>
    <div>
    </div>
    <div>
    </div>
  </Card>;
}

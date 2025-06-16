import * as S from './styled';
import Calendar from '../../../../assets/images/Calendar.png';
import HeartWithDate from '../../../../assets/images/heart-with-date.png';

import { motion } from 'framer-motion';

const CalendarSection = () => {
  return (
    <S.Wrapper>
      <S.Title>Когда?</S.Title>
        <div style={{position: 'relative'}}>

            <img src={Calendar} alt="Calendar" style={{width: '100%', height: '100%'}}/>

            <motion.div
                initial={{ scale: 1, rotate: 0 }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop'
                }}
                style={{
                    position: 'absolute',
                    left: '27%',
                    bottom: '15%',
                    transform: 'translate(-50%, 0)',
                    width: '12%',
                    height: 'auto',
                }}
            >
                <img src={HeartWithDate} alt="Heart with Date" style={{width: '100%', height: '100%'}}/>
            </motion.div>
        </div>
    </S.Wrapper>
  );
};

export default CalendarSection;

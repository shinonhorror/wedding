import CalendarSection from './components/calendar';
import ChildSection from './components/child';
import DetailsSection from './components/details';
import DresscodeSection from './components/dresscode';
import FormSection from './components/form';
import LocationSection from './components/location';
import TimeSection from './components/time';
import TimerSection from './components/timer';
import WaitingSection from './components/wating';
import WelcomeSection from './components/welcome';
import * as S from './styled';
import LoveImageSection from './components/loveImage';
import Player from './components/playlist';

import { motion } from 'framer-motion';

const Main = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const sections = [
    { component: <ChildSection /> },
    { component: <LoveImageSection /> },
    { component: <WelcomeSection /> },
    { component: <CalendarSection /> },
    { component: <LocationSection /> },
    { component: <DresscodeSection /> },
    { component: <TimeSection /> },
    { component: <FormSection /> },
    { component: <DetailsSection /> },
    { component: <TimerSection /> },
    { component: <WaitingSection /> },
  ];
  
  return (
    <S.Wrapper>
      <Player />

      {sections.map((Section, index) => (
        <motion.section
          key={`section-${index}`}
          id={`section-${index}`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2,  ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25,}}
        >
          {Section.component}
        </motion.section>
      ))}
    </S.Wrapper>
  );
};

export default Main;

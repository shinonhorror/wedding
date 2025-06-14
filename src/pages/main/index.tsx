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

const Main = () => {
  return (
    <S.Wrapper>
      <ChildSection />
      <WelcomeSection />
      <CalendarSection />
      <LocationSection />
      <DresscodeSection />
      <TimeSection />
      <FormSection />
      <DetailsSection />
      <TimerSection />
      <WaitingSection />
    </S.Wrapper>
  );
};

export default Main;

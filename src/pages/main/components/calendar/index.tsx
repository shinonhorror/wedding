import * as S from './styled';
import Calendar from '../../../../assets/images/calendar.png';

const CalendarSection = () => {
  return (
    <S.Wrapper>
      <S.Title>Когда?</S.Title>
      <img src={Calendar} alt="Calendar" />
    </S.Wrapper>
  );
};

export default CalendarSection;

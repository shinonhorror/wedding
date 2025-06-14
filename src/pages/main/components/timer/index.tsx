import * as S from './styled';
import Timer from '../../../../assets/images/time.png';
import StarIcon from '../../../../assets/icons/star.svg';
import { useEffect, useState } from 'react';
import { plural } from '../../../../core/utils/plural';

const TimerSection = () => {
  const targetDate = new Date('2025-08-26T16:00:00').getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <S.Wrapper>
      <S.Title> Мы скажем ДА через... </S.Title>
      <S.TimerWrapper>
        <img src={Timer} alt="" />
        <S.TimeList>
          <S.TimeItem>
            {timeLeft.days} <br />{' '}
            {plural(timeLeft.days, ['день', 'дня', 'дней'])}
            <StarIcon />
          </S.TimeItem>
          <S.TimeItem>
            {timeLeft.hours}
            <br /> {plural(timeLeft.hours, ['час', 'часа', 'часов'])}
            <StarIcon />
          </S.TimeItem>
          <S.TimeItem>
            {timeLeft.minutes}
            <br /> {plural(timeLeft.minutes, ['минута', 'минуты', 'минут'])}
          </S.TimeItem>
        </S.TimeList>
      </S.TimerWrapper>
    </S.Wrapper>
  );
};

export default TimerSection;

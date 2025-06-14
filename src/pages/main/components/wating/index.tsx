import * as S from './styled';
import We from '../../../../assets/images/we.png';

const WaitingSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Ждем вас!</S.Title> <img src={We} alt="We" />
    </S.Wrapper>
  );
};

export default WaitingSection;

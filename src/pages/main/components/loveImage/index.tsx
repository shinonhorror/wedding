import * as S from './styled';
import love from '../../../../assets/images/love.png';

const LoveImageSection = () => {
  return (
    <S.Wrapper>
      <S.LoveImage src={love} alt="Love" />
    </S.Wrapper>
  );
};

export default LoveImageSection;

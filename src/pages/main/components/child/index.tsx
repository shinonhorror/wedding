import * as S from './styled';
import Me from '../../../../assets/images/child-me.png';
import Egpr from '../../../../assets/images/child-egor.png';
import love from '../../../../assets/images/love.png';
import PlusIcon from '../../../../assets/icons/plus.svg';

const ChildSection = () => {
  return (
    <S.Wrapper>
      <S.Title>Мы женимся. </S.Title>
      <S.Description>
        Да, не ошиблись, это точно свадьба. <br /> Да, согласились оба. <br />
        Да, наконец-то :)
      </S.Description>
      <S.ImageWrapper>
        <img src={Me} alt="" /> <PlusIcon />
        <img src={Egpr} alt="" />
      </S.ImageWrapper>

      <S.LoveImage src={love} alt="" />
    </S.Wrapper>
  );
};

export default ChildSection;

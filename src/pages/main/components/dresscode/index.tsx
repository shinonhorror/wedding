import * as S from './styled';
import Colors from '../../../../assets/images/dresscode.png';

const DresscodeSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Дресс-код </S.Title>
      <S.Description>
        Чтобы наш вечер получился максимально гармоничным по дизайну, просим вас
        придерживаться мягкой и спокойной цветовой гаммы.
      </S.Description>
      <S.Description>
        Не обязательно следовать на 100%, но если вы придёте в одном из этих
        цветов — мы будем просто в восторге!
      </S.Description>
      <img src={Colors} alt="" />
    </S.Wrapper>
  );
};

export default DresscodeSection;

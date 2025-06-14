import * as S from './styled';
import BranchIcon from '../../../../assets/icons/branch.svg';

const TimeSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Тайминги</S.Title>
      <S.Item>
        <S.Description>Welcome</S.Description>
        <S.ItemText>
          В это время наливаем шампанское, ловим первые баги, а вы успеваете
          загрузить social cache и сфоткаться.
        </S.ItemText>
        <S.Subtitle>16.00</S.Subtitle>
      </S.Item>
      <BranchIcon />
      <S.Item>
        <S.Description>Церемония</S.Description>
        <S.ItemText>
          Этот эпизод с романтикой, слезами (возможно, не только у мам) и
          торжественным “Да!”
        </S.ItemText>
        <S.Subtitle>16.30</S.Subtitle>
      </S.Item>
      <BranchIcon />
      <S.Item>
        <S.Description>Банкет</S.Description>{' '}
        <S.ItemText>
          Тут всё по классике: тосты, закуски, уровень сытости от “попробую всё”
          до “надо было надеть свободную одежду”.
        </S.ItemText>
        <S.Subtitle>17.30</S.Subtitle>
      </S.Item>
      <BranchIcon />
      <S.Item>
        <S.Description>Окончание вечера</S.Description>{' '}
        <S.ItemText>
          Даже такая вечеринка может закончиться, но мы придумаем ещё поводы
          собраться вместе
        </S.ItemText>
        <S.Subtitle>23.00</S.Subtitle>
      </S.Item>
    </S.Wrapper>
  );
};

export default TimeSection;

import * as S from './styled';

const DetailsSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Детали </S.Title>
      <S.DetailItem>
        <S.DetailText>
          Если у вас остались вопросы или пожелания можете смело обращаться к нашему
          сказочному организатору - Алине{' '}
          <a href="https://t.me/alina21541" target="_blank">
            (@alina21541)
          </a>
        </S.DetailText>
      </S.DetailItem>
      <S.DetailItem>
        <S.DetailText>
          Вы можете прийти с цветами, но не обязаны — наш кот их съест, а
          флорист расстроится.
        </S.DetailText>
        <S.DetailText>
          Лучший подарок — донат на наше путешествие или апгрейд квартиры. (Мы
          даже примем наличные, не бойтесь быть ретро.)
        </S.DetailText>
      </S.DetailItem>
    </S.Wrapper>
  );
};

export default DetailsSection;

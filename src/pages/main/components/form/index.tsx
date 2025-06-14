import * as S from './styled';

const FormSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Анкета гостя </S.Title>
      <S.Description>
        Мы не собираем куки, только вашу любовь. Но немного данных всё же нужно.
      </S.Description>
      <S.Button
        onClick={() =>
          window.open('https://forms.gle/SRk7FhunfSSuyWTB8', '_blank')
        }
      >
        Заполнить анкету
      </S.Button>
    </S.Wrapper>
  );
};

export default FormSection;

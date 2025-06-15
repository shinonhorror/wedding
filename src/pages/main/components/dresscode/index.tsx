import * as S from './styled';
import Colors from '../../../../assets/images/dresscode.png';
import { motion } from 'framer-motion';

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
      <motion.img
        src={Colors}
        alt=""
        animate={{ rotate: 360 }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </S.Wrapper>
  );
};

export default DresscodeSection;

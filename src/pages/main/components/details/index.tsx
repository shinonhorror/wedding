import * as S from './styled';
import { motion } from 'framer-motion';

const DetailsSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Детали </S.Title>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.DetailItem>
          <S.DetailText>
            Если у вас остались вопросы или пожелания можете смело обращаться к нашему
            сказочному организатору - Алине{' '}
            <a href="https://t.me/alina21541" target="_blank">
              (@alina21541)
            </a>
          </S.DetailText>
        </S.DetailItem>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
      </motion.div>
    </S.Wrapper>
);
};

export default DetailsSection;

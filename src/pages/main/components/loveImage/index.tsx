import * as S from './styled';
import love from '../../../../assets/images/love.png';
import { motion } from 'framer-motion';

const LoveImageSection = () => {
  return (
    <S.Wrapper>
      <motion.div
        layout
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ margin: '-100px 0px -100px 0px', once: true }}
      >
        <S.LoveImage src={love} alt="Love" />
      </motion.div>
    </S.Wrapper>
  );
};

export default LoveImageSection;

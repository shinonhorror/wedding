import * as S from './styled';
import Me from '../../../../assets/images/child-me.png';
import Egpr from '../../../../assets/images/child-egor.png';
import PlusIcon from '../../../../assets/icons/plus.svg';

import { motion } from 'framer-motion';

const ChildSection = () => {
  return (
    <S.Wrapper>
      <motion.div
        layout
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <S.Title>Мы женимся.</S.Title>
      </motion.div>
      <motion.div
        layout
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <S.Description>
          Да, не ошиблись, это точно свадьба. <br /> Да, согласились оба. <br />
          Да, наконец-то :)
        </S.Description>
      </motion.div>

      <motion.div
        layout
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <S.ImageWrapper>
          <motion.img
            src={Me}
            alt=""
            initial={{
              x: -40,
              opacity: 0,
              scale: 1,
              rotate: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: [1, 1.02, 1],
              rotate: [0, -0.8, 0],
            }}
            transition={{
              x: { duration: 0.8, ease: 'easeOut' },
              opacity: { duration: 0.8, ease: 'easeOut' },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              },
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              },
            }}
          />

          <motion.span
            initial={{ scale: 0.95, opacity: 1 }}
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: 0.8,
            }}
          >
            <PlusIcon />
          </motion.span>

          <motion.img
            src={Egpr}
            alt=""
            initial={{ x: 40, opacity: 0, scale: 1 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: [1, 1.02, 1],
              rotate: [0, 0.8, 0],
            }}
            transition={{
              x: { duration: 0.8, ease: 'easeOut' },
              opacity: { duration: 0.8, ease: 'easeOut' },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              },
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              },
            }}
          />
        </S.ImageWrapper>
      </motion.div>
    </S.Wrapper>
  );
};

export default ChildSection;

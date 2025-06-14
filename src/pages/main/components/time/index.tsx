import * as S from './styled';
import BranchIcon from '../../../../assets/icons/branch.svg';

import { motion } from 'framer-motion';
import { Fragment } from 'react';

// @ts-ignore
const AnimatedItem = ({ index, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: index * 0.2
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const TimeSection = () => {
  const items = [
    {
      title: 'Welcome',
      text: 'В это время наливаем шампанское, ловим первые баги, а вы успеваете загрузить social cache и сфоткаться.',
      time: '16.00'
    },
    {
      title: 'Церемония',
      text: 'Этот эпизод с романтикой, слезами (возможно, не только у мам) и торжественным “Да!”',
      time: '16.30'
    },
    {
      title: 'Банкет',
      text: 'Тут всё по классике: тосты, закуски, уровень сытости от “попробую всё” до “надо было надеть свободную одежду”.',
      time: '17.30'
    },
    {
      title: 'Окончание вечера',
      text: ' Даже такая вечеринка может закончиться, но мы придумаем ещё поводы собраться вместе',
      time: '23.00'
    }
  ];
  return (
    <S.Wrapper>
      <S.Title>Тайминги</S.Title>
      {items.map((item, index) => (
        <Fragment key={`${index}-${item.title}`}>
          <AnimatedItem index={index}>
            <S.Item>
              <S.Description>{item.title}</S.Description>
              <S.ItemText>{item.text}</S.ItemText>
              <S.Subtitle>{item.time}</S.Subtitle>
            </S.Item>
          </AnimatedItem>

          {index !== items.length - 1 &&
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: index * 0.2 + 0.2
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <BranchIcon />
          </motion.div>}
        </Fragment>
      ))}
    </S.Wrapper>
  );
};

export default TimeSection;

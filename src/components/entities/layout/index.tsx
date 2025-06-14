import { FC } from 'react';
import * as S from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <S.MainContainer>
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.MainContainer>
  );
};

export default Layout;

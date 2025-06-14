import styled from 'styled-components';

export const Wrapper = styled.section`
  svg {
    width: 100px;
    height: auto;

    @media (max-width: 1024px) {
      width: 60px;
    }
  }
`;

export const LoveImage = styled.img`
  max-width: 900px;
  width: 100%;
  margin: 54px 0;
`;

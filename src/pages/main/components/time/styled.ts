import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  svg {
    width: 251px;
    height: auto;

    @media (max-width: 1024px) {
      width: 140px;
    }

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

export const Title = styled.h2``;

export const Description = styled.p``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

export const ItemText = styled.span`
  color: #605f23;
  text-align: center;
`;

export const Subtitle = styled.h3``;

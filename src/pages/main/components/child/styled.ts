import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  svg {
    width: 100px;
    height: auto;

    @media (max-width: 1024px) {
      width: 60px;
    }
  }
`;

export const Title = styled.h2``;

export const Description = styled.p``;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;

  img {
    object-fit: contain;
    width: auto;
    height: auto;
    align-self: end;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;

    img {
      width: 100%;
    }
  }
`;

export const LoveImage = styled.img`
  max-width: 900px;
  width: 100%;
`;

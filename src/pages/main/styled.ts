import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  margin-bottom: 88px;

  @media (max-width: 1024px) {
    gap: 64px;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  iframe {
    width: 100%;
    position: sticky;
    top: 0;
  }
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h2``;

export const Description = styled.p``;

export const Button = styled.button``;

export const TimerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TimeList = styled.div`
  display: flex;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const TimeItem = styled.div`
  display: flex;
  gap: 24px;
  font-size: clamp(16px, 4vw, 64px);
  align-items: center;
  text-align: center;
  color: #605f23;

  svg {
    width: 38px;
    height: auto;
  }

  @media (max-width: 768px) {
    svg {
      width: 24px;
      height: auto;
    }
  }
`;

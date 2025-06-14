import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100dvh;
  width: 100%;
  max-width: 1600px;
  padding: 120px;
  margin: 0 auto;
  gap: 100px;

  @media (max-width: 1024px) {
    padding: 64px;
    gap: 64px;
  }

  @media (max-width: 768px) {
    padding: 24px;
    gap: 40px;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    @media (max-width: 1024px) {
      gap: 40px;
    }

    @media (max-width: 768px) {
      gap: 24px;
    }
  }

  h2 {
    font-size: 96px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 72px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  h3 {
    font-size: 64px;
    text-align: center;
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 48px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 48px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 32px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  span {
    font-size: 32px;
    line-height: 1.3;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  button {
    padding: 32px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5e4234;
    color: #f4eee4;
    font-size: 54px;
    border-radius: 24px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;

    @media (max-width: 1024px) {
      font-size: 32px;
      padding: 16px 40px;
      border-radius: 16px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h2``;

export const Description = styled.p``;

export const Button = styled.button`
  padding: 32px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5e4234;
  color: #f4eee4;
  font-size: 54px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  border: none;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    font-size: 32px;
    padding: 16px 40px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

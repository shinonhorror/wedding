import styled, { css } from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h2``;

export const DetailItem = styled.div`
  border-left: 10px solid #605f23;
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #605f23;

  @media (max-width: 1024px) {
    padding: 20px;
    border-left: 5px solid #605f23;
  }
`;

export const DetailText = styled.span`
  a {
    color: #702833;
  }
`;

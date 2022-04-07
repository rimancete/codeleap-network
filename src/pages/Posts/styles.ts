import styled from 'styled-components';

export const HomeContainer = styled.div``;
export const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings.medium};
`;

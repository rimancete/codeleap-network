import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: ${({ theme }) => theme.spacings.medium};
`;
export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

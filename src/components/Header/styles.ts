import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: ${({ theme }) => theme.spacings.medium};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export const UserDataContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserDataContentGreetings = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: ${({ theme }) => theme.spacings.xsmall};
`;
export const UserDataContentGreetingsText = styled.h5`
  color: ${({ theme }) => theme.colors.white};
`;

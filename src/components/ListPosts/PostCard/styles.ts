import styled, { css } from 'styled-components';

export const BookCardContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    border: 2px solid ${theme.colors.placeholder};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: ${theme.spacings.medium};
    /* transition: transform 100ms ease-in-out; */
    height: 328px;
    max-width: 723px;
    width: 100%;
    /* :hover {
      transform: scale(1.05);
    } */
  `}
`;

export const BookCardHeader = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};
  margin: -${({ theme }) => theme.spacings.medium};
`;
export const BookCardHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;

export const BookCardBody = styled.div`
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;

export const BookCardBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookCardBodyHeaderUsername = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
export const BookCardBodyHeaderPostedTime = styled.p`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

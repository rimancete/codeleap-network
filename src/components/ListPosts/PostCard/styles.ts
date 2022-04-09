import styled, { css } from 'styled-components';

export const PostCardContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    border: 2px solid ${theme.colors.placeholder};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: ${theme.spacings.large};
    height: 328px;
    width: 100%;
  `}
`;

export const PostCardHeader = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};
  margin: -${({ theme }) => theme.spacings.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PostCardHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;

export const PostCardHeaderIcons = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.spacings.medium};
`;

export const PostCardBody = styled.div`
  padding: ${({ theme }) => theme.spacings.medium} 0;
  height: 220px;
`;

export const PostCardBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostCardBodyHeaderUsername = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
export const PostCardBodyHeaderPostedTime = styled.p`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
export const PostCardBodyPostContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
`;
export const PostCardBodyPostText = styled.p``;

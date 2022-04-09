import styled from 'styled-components';

export const PostContent = styled.div`
  margin: ${({ theme }) => theme.spacings.large};
  padding: ${({ theme }) => theme.spacings.medium};
  border: 2px solid ${({ theme }) => theme.colors.placeholder};
  width: 100%;
`;
export const PostContentTitle = styled.h1``;

export const PostForm = styled.form``;
export const ContentText = styled.textarea``;

export const TextAreaContent = styled.div`
  width: 100%;
`;

export const TextAreaLabel = styled.p``;

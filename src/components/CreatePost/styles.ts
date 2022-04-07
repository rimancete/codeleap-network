import styled from 'styled-components';

interface PostContentProps {
  width: number;
}

export const PostContent = styled.div<PostContentProps>`
  margin: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};
  border: 2px solid ${({ theme }) => theme.colors.placeholder};
  max-width: ${(p) => (p.width < 768 ? '' : '723px')};
  width: 100%;
`;
export const PostContentTitle = styled.h1``;

export const PostForm = styled.form``;
export const ContentText = styled.textarea``;

export const TextAreaContent = styled.div`
  width: 100%;
`;

export const TextAreaLabel = styled.p``;

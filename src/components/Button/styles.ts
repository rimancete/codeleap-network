import styled from 'styled-components';

interface CustomButtonProps {
  isWhite: boolean;
}

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacings.small};
`;

export const CustomButton = styled.button<CustomButtonProps>`
  color: ${({ theme, isWhite }) => isWhite && theme.colors.primaryColor};
  background: ${({ theme, isWhite }) => isWhite && theme.colors.white};
  border: 2px solid
    ${({ theme, isWhite }) => isWhite && theme.colors.primaryColor};

  &:hover {
    border-color: ${({ theme, isWhite }) => isWhite && theme.colors.cancel};
  }
  &:disabled {
    color: ${({ theme, isWhite }) => isWhite && theme.colors.white};
  }
`;

import { createGlobalStyle } from 'styled-components';
import { Theme } from '../types/styled-components';

export const GlobalStyles = createGlobalStyle<Theme>`
 *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  h1 {
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: 700;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0 ${({ theme }) =>
  theme.spacings.small} 0;
    font-size: 1.125em;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  button {
    width: 111px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primaryColor};
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 5px 20px;
    font-size: ${({ theme }) => theme.font.sizes.small};
    transition: all, 0.3s;
  }
  button:hover {
    border-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  button:disabled {
      background: ${({ theme }) => theme.colors.mediumGray};
      border: 2px solid transparent;
      cursor: not-allowed;
    }

  input[type='text'] {
      font-size: ${({ theme }) => theme.font.sizes.large};
      width: 100%;
      padding: 5px 10px;
      border-radius: 4px;
      &::placeholder {
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
      }
  }
  textarea {
      border: 2px solid ${({ theme }) => theme.colors.primaryColor};
      resize: none;
      font-size: ${({ theme }) => theme.font.sizes.large};
      width: 100%;
      padding: 5px 10px;
      border-radius: 4px;
      &::placeholder {
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
      }
  }
  form {
    width: 100%;
  }
  .icon-pressable {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    border-color: transparent;
    transition: all, 0.3s;
  }
  .icon-pressable:hover {
    transform: scale(1.4);
  }

  .page-selector {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    border-color: transparent;
  }

  .page-selector--disabled {
    color: ${({ theme }) => theme.colors.secondaryColor};
    cursor: not-allowed;
  }

`;

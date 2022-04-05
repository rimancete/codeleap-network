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
    margin: ${({ theme }) => theme.spacings.large} 0;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    font-size: 1.125em;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  /* a {
    color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all, 0.3s;
    text-decoration: none;
    margin: 10px;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  } */

  button {
    width: 111px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 15px 30px;
    font-size: ${({ theme }) => theme.font.sizes.small};
    transition: all, 0.3s;
  }
  button:hover {
    border-color: ${({ theme }) => theme.colors.white};
  }

  button:disabled {
      background: ${({ theme }) => theme.colors.mediumGray};
      cursor: not-allowed;
    }

  input[type='text']/*,[type='search']*/ {
      font-size: ${({ theme }) => theme.font.sizes.large};
      width: 100%;
      border-radius: 5px;
      padding: 5px 10px;
      &::placeholder {
        font-size: 1em;
      }
  }
  /* .pressable {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    border-color: transparent;
    transition: all, 0.3s;
  }
  .pressable:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  } */
  .icon-pressable {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    border-color: transparent;
    transition: all, 0.3s;
  }
  .icon-pressable:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

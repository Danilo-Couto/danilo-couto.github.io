import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 10;
  }
  html {
    font-size: 62.5%;
  }
  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family.primary}, sans-serif;
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-size: 1.8rem;
    font-family: 'Open Sans', sans-serif; 
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkCyan};
  }

  h1 {
    font-size: 4.2rem;
    line-height: 1.3;
  }


  p {
    line-height: 1.5; 
  }
`;

export default GlobalStyles;

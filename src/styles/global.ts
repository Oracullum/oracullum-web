import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${props => props.theme.colors.primaryGradient};
    overflow: hidden;
  }

  body, input, textarea, button {
    font: 14px Archivo, Poppins, Titillium Web, sans-serif;
  }

  a {
    text-decoration: none !important;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;

    &:active{
      outline: none;
    }
  }

  html, body, #root{
    height: 100%;
    
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

`;
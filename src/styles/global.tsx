import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

  @font-face {
    font-family: "Circular Std Book"; 
    src: url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.eot"); src: url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.eot?#iefix") format("embedded-opentype"), 
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff2") format("woff2"), 
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff") format("woff"), 
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.ttf") format("truetype"), 
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.svg#Circular Std Book") format("svg"); }
  *{
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;

    &:focus{
      outline: none;
    }
  }

  html, body, #root{
    height: 100%;
    
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body{
    --primary-color: #2DBC9C;
    --secondary-color: #D94343; 
    --font-primary: #43425D;
  }

  input::placeholder{
    font-family: "Circular Std Book", 'Helvetica', Arial, sans-serif;
  }

`;

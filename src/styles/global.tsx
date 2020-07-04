import styled, { createGlobalStyle } from 'styled-components';

export type SvgIconProps = {
  source: string;
  color?: string;
  size?: string;
};

export const SvgIconStyle = styled.div<SvgIconProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color ?? '#303030'};
  mask-image: url(${(props) => props.source});
  -webkit-mask-image: url(${(props) => props.source});
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-size: ${(props) => props.size ?? '100%'};
  -webkit-mask-size: ${(props) => props.size ?? '100%'};
`;

export default createGlobalStyle`
  @import url('//db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

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

  img {
    max-height: 100%;
  }
`;

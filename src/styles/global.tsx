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
 
  *{
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;

    &:focus{
      outline: none;
    }
    &::-webkit-scrollbar{
      width: 0px;
    }
  }

  html, body, #root{
    height: 100%;
    
    font-family: 'Circular Std Book','Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body{
    --primary-color: #2DBC9CFF;
    --primary-color-75: #2DBC9CAA;
    --primary-color-50: #2DBC9C88;
    --primary-color-25: #2DBC9C44;
    --primary-color-15: #2DBC9C22;
    --primary-color-10: #2DBC9C11;
    
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

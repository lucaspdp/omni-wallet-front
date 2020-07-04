import styled from 'styled-components';

const itemHeight = 45;
const containerExpandedWidth = '20%';
const containerContractedWidth = '55px';

type ContainerProps = {
  isExpanded : boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  text-align:center;
  box-sizing: border-box;
  padding: 0 10px;
  ${props => props.isExpanded ? 
    (`width: ${containerExpandedWidth};`)
    : (`width: ${containerContractedWidth};`)}

  & > div {
    margin-bottom: 15px;
    height: ${itemHeight}px;
    line-height: ${itemHeight}px;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: ${itemHeight}px 1fr;
    grid-template-rows: ${itemHeight}px;
  }
`;

export const HarmburguerMenu = styled.img`

`;

export const BrandContainer = styled.div<ContainerProps>`
  display: block;
  ${props => props.isExpanded ? 
    (
      `width: ${containerExpandedWidth};
      height : $`
      )
    : (`width: ${containerContractedWidth};`)} 
  
`;
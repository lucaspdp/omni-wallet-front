import styled from 'styled-components';

const itemHeight = 45;
export const SideMenuContainerExpandedWidth = '20%';
export const SideMenuContainerContractedWidth = '55px';

type ContainerProps = {
  isExpanded: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: absolute;
  text-align: center;
  box-sizing: border-box;
  padding: 0 5px;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 4px 1px ${(props) => (props.isExpanded ? 'rgba(0,0,0,0.1);' : 'transparent')};
  z-index: 10;
  transition: width 0.4s;
  ${(props) =>
    props.isExpanded ? `width: ${SideMenuContainerExpandedWidth};` : `width: ${SideMenuContainerContractedWidth};`}

  & > div {
    margin-bottom: 10px;
    height: ${itemHeight}px;
    line-height: ${itemHeight}px;
    box-sizing: border-box;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    display: grid;
    grid-template-columns: ${itemHeight - 10}px 1fr;
    grid-template-rows: ${itemHeight - 10}px;
  }
`;

export const HarmburguerMenu = styled.div``;

export const BrandContainer = styled.div<ContainerProps>`
  display: block;
  ${(props) =>
    props.isExpanded
      ? `width: ${SideMenuContainerExpandedWidth};
      height : $`
      : `width: ${SideMenuContainerContractedWidth};`}
`;

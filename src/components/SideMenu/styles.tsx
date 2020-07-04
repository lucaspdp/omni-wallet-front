import styled from 'styled-components';

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
`;

export const HarmburguerMenu = styled.div``;

export const MenuBrand = styled.div`
  height: 80px;
  margin: 15px 0;
  align-content: center;
  text-align: center;
  width: 100%;
`;

export const BrandContainer = styled.div<ContainerProps>`
  display: inline-block;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding-top: -5px;
  opacity: ${(props) => (props.isExpanded ? '1' : '0')};
  & > div {
    margin-top: -2px;
  }
`;


export const MenuItemSeparator = styled.div`
  height: 10px;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  margin-bottom: 10px;
`;
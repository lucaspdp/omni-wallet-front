import styled from 'styled-components';
import StyleMenuComponent from '../../components/SideMenu';
import HeaderComponent from '../../components/Header';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: 55px 1fr;
`;

export const Header = styled(HeaderComponent)`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
`;

export const SideMenu = styled(StyleMenuComponent)`
  height: 100%;
  z-index: 10;
`;

export const Body = styled.div`
  position: relative;
  border-top-left-radius: 4px;
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  background-color: #e9e9e9;
  z-index: 1;
  padding: 10px 20px;
`;

export const BodyShadowFx = styled.div`
  border-top-left-radius: 4px;
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  z-index: 2;
  pointer-events: none;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.07);
`;

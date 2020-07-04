import styled from 'styled-components';
import StyleMenuComponent from '../../components/SideMenu';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: 45px 1fr;
`;

export const Header = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  width: 100%;
`;

export const SideMenu = styled(StyleMenuComponent)`
  height: 100%;
  z-index: 10;
`;

export const Body = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  background-color: #f0f0f0;
  z-index: 1;
`;

export const BodyShadowFx = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  z-index: 2;
  pointer-events: none;
  box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.1);
`;
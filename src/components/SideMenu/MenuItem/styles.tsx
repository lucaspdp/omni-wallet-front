import styled from 'styled-components';

export type SideMenuItemProps = {
  expanded: boolean;
  selectable?: boolean;
  selected?: boolean;
};

export const Container = styled.div<SideMenuItemProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => (props.expanded ? '45px 1fr' : '45px')};
  grid-template-rows: 1fr;
  border-radius: 4px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  overflow: hidden;
  transition: background-color 0.3s, border-left 0.3s;

  ${(props) =>
    props.selected
      ? `
  background-color: var(--primary-color);
  color: white;
  `
      : ``}

  ${(props) =>
    props.selectable ?? true
      ? `cursor: pointer;${
          props.selected
            ? ''
            : `
        &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        border-left: 3px solid var(--primary-color);
      }`
        }`
      : ``}
`;

export const MenuIcon = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  text-align: center;
  margin-left: -3px;
  & img {
    max-height: 100%;
  }
`;

export const MenuLabel = styled.div<{ expanded: boolean }>`
  opacity: ${(props) => (props.expanded ? '1' : '0')};
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  transition: opacity 0.2s;
  align-self: center;
  text-align: left;
  box-sizing: border-box;
  padding-left: 15px;
  font-weight: lighter;
`;

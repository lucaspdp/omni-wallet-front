import styled from 'styled-components';

export const Container = styled.div<{selected : boolean;}>`
  position: relative;
  float: left;
  width: auto;
  height: 30px;
  border-radius: 10px;
  padding: 0px 10px;
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows: 30px;
  margin:0 10px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;

  ${props => props.selected ? `
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
  ` : `
  border: 1px solid rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: rgba(0,0,0,0.05);
  }
  `}
`;

export const ItemIcon = styled.div<{ hasIcon?: boolean }>`
  grid-column: ${(props) => (props.hasIcon ?? false ? ' 1 / span 1' : '1')};
  display: ${(props) => (props.hasIcon ?? false ? 'block' : 'none')};
`;

export const ItemLabel = styled.div<{ hasIcon?: boolean }>`
  grid-column: ${(props) => (props.hasIcon ?? false ? ' 2 / span 1' : ' 1 / span 2')};
  grid-row: 1 / span 1;
  line-height: 30px;
`;

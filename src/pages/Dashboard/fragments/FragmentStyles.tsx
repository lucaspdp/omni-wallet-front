import styled from 'styled-components';

export const cardBgColor = '#fcfcfc';

export const FragmentContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const FullRowCard = styled.div`
  position: relative;
  display: grid;
  flex-flow: row wrap;
  background-color: ${cardBgColor};
  width: 100%;
  clear: both;
  height: auto;
  min-height: 30px;
  border-radius: 4px;
  grid-template-columns: repeat(1fr, 10);
  column-gap: 15px;
  grid-auto-rows: auto;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
  }
  & > div {
    float: left;
  }
`;

export const FragmentHeader = styled(FullRowCard)`

  background: 0;
  box-shadow: none;
  border-radius: 0;
  padding-left: 10px;
  line-height: 40px;
  border-left: 4px solid var(--primary-color);
  
  &:hover {
    box-shadow: none;
  }
  font-weight: bold;
  font-size: 14pt;
`;

export const FragmentTitle = styled.div`
grid-column: 1 / span 3;
  width: auto;
  flex-basis: 300px;
`;

export const FragmentHeaderOptions = styled(FullRowCard)`
  grid-column : 4 / span 7;
  width: auto;
  text-align: right;
  display: inline-grid;
  grid-auto-flow: column;
  justify-items: left;
  box-sizing: border-box;
  padding: 0px 15px;
`;

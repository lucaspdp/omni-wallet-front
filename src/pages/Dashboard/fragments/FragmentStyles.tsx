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
  background-color: ${cardBgColor};
  width: 100%;
  height: auto;
  min-height: 30px;
  border-radius: 2px;
  column-gap: 15px;
  grid-auto-rows: auto;
  
  transition: box-shadow 0.3s;
  margin-bottom: 20px;
  padding: 10px 20px;
  overflow: hidden;
  & > div {
    float: left;
  }
`;

export const FragmentHeader = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0;
  height: auto;
  overflow: hidden;
`;

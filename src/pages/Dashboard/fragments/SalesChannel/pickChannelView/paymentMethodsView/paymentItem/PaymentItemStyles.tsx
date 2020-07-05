import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr auto;
  grid-template-rows: 40px;
  font-size: 10pt;
  color: #303030;
`;

export const ColorHolder = styled.div<{ color: string }>`
  grid-column: 1 / span 1;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  height: 30px;
  width: 30px;
  justify-self: center;
  margin: 5px;
  align-self: self;

  & .white-circle {
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    margin: 5px;
    border-radius: 100%;
  }
`;

export const Title = styled.div`
  grid-column: 2 / span 1;
  align-self: center;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const Amount = styled.div`
  grid-column: 3 / span 1;
  align-self: center;
  justify-self: flex-end;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 13pt;
`;

export const ActionLink = styled.div`
  width: 100%;
  height: 40px;
  color: #2dbc9c;
  font-weight: bold;
  font-size: 12pt;
  text-align: center;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

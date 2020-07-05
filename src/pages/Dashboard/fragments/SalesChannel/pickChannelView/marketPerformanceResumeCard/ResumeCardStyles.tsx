import styled from 'styled-components';

export const MarketResumeInformation = styled.div`
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 60px 160px;
  grid-template-rows: 27px 33px;
  margin-right: 20px;
`;

export const InformationLogo = styled.div<{color: string;}>`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  position: relative;
  width: auto;
  height: auto;
  display: block;
  border: 1px solid ${props => props.color};
  border-radius: 50%;
  height: 60%;
  width: 60%;
  align-self: center;
  justify-self: center;
`;

export const InformationTitle = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  color: #505050;
  justify-content: baseline;
  align-self: end;
  font-weight: bold;
  font-size: 11pt;
`;
export const InformationContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 14pt;
  align-self: flex-start;
`;

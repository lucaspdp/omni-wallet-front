import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 13pt;
`;

export const CardEnvelop = styled.div`
  position: relative;
  width: 90%;
  border-radius: 6px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow: auto;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const PaymentLogo = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  align-self: center;
  img {
    max-width: 100%;
  }
`;

export const PaymentInfoColumn = styled.div`
  grid-column: 2 / span 1;
  align-self: center;
  font-size: 13pt;
  font-weight: lighter;
  span {
    margin: 0 20px;
  }
`;

export const MarketPaymentInfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 40px;
  grid-auto-rows: 40px;
  column-gap: 20px;
  padding: 10px 0;
`;

export const MarketPaymentImpact = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
  div {
    position: absolute;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    text-align: right;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    font-size: 10pt;
    box-sizing: border-box;
    &:nth-child(1) {
      background-color: #f71963;
    }
    &:nth-child(2) {
      background-color: #00d0fb;
      max-width: 90%;
    }
    &:nth-child(3) {
      background-color: #a3a0fb;
      max-width: 80%;
    }
  }
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

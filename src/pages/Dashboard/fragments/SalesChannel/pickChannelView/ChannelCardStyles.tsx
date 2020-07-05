import styled from 'styled-components';
import { SvgIconStyle } from '../../../../../styles/global';

export const MarketplaceInfoGrid = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: grid;
  width: 100%;
  height: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 90px;
  padding: 10px 20px;
`;

export const MarketplaceIcon = styled(SvgIconStyle)``;

export const MarketplaceInfoColumn = styled.div`
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  &:nth-child(2) {
    border-right: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const MarketplaceInfoRow = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  display: grid;
  grid-template-columns: 170px 1fr;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 12pt;
  float: left;
  margin-right: 4px;
`;

export const Info = styled.div`
  font-weight: bold;
  font-size: 13pt;
  float: left;
`;

export const MarketplaceChartDisplay = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 10px 0;
`;

export const ChartFilters = styled.div`
  display: grid;
  grid-template-columns: 120px 200px 200px;
  column-gap: 20px;
  grid-template-rows: 40px;
  align-items: center;
`;

export const ChartFiltersTitle = styled.div`
  font-size: 14pt;
  font-weight: bold;
`;

export const ChartFilterPickTimeUnit = styled.div``;

export const ChartFilterPickTimeInterval = styled.div``;

export const MarketplacePerformanceChart = styled.div`
  width: 100%;
  margin-left: -20px ;
  position: relative;
  height: 350px;
`;

export const MarketResumeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  margin: 10px 0;
`;

export const MarketAndPaymentContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: auto;
`;

export const MarketRulesView = styled.div`
  grid-column: 1 / span 1;
`;

export const PaymentMethodsView = styled.div`
  grid-column: 2 / span 1;
`;

import styled from 'styled-components';

export const Container = styled.div``;

export const SelectViewRangeContainer = styled.div`
  width: 100%;
  height: auto;
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
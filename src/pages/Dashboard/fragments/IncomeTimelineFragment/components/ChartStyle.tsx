import styled from 'styled-components';
import { FullRowCard } from '../../FragmentStyles';

export const Container = styled(FullRowCard)`
position: relative;
  height: auto;
  overflow: auto;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 50px;
  padding-bottom: 30px;
`;

export const SelectViewRangeContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const FutureSalesChartDisplay = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 10px 0;
`;

export const ChartFilters = styled.div`
  display: grid;
  grid-template-columns: 140px 200px 200px;
  column-gap: 20px;
  grid-template-rows: 40px;
  align-items: center;
`;

export const ChartFiltersTitle = styled.div`
  font-size: 10pt;
  font-weight: bold;
  
`;

export const ChartFilterPickTimeUnit = styled.div``;

export const ChartFilterPickTimeInterval = styled.div``;

export const FutureBillsChart = styled.div`
  width: 100%;
  margin-left: -20px;
  position: relative;
  height: 350px;
`;

export const SalesAllChannelsViewer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: auto;
  width: 100%;
`;

export const ChartTitle = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 13pt;
`;

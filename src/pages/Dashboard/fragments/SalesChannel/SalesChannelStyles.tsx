import styled from 'styled-components';
import { FragmentContainer, FullRowCard, FragmentHeader as FragmentHeaderComponent } from '../FragmentStyles';

export const Container = styled(FragmentContainer)``;

export const ChannelVisualization = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
`;

export const FragmentHeader = styled(FragmentHeaderComponent)`
  display: flex;
  overflow: visible;
  height: 50px;
  margin-bottom: 10px;
  z-index: 10;
`;

export const FragmentViewSelectorTitle = styled.div`
  position: relative;
  float: left;
  width: auto;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 12pt;
`;

export const FragmentViewSelector = styled(FullRowCard)`
  float: left;
  align-self: left;
  width: 420px;
  text-align: right;
  display: grid;
  grid-template-columns: 150px 240px;
  grid-template-rows: 40px;
  justify-items: left;
  box-sizing: border-box;
  padding: 0px 15px;
  font-weight: lighter;
  font-size: 10pt;
  padding: 5px 10px;
  height: 50px;
  align-items: center;
  margin-right: 30px;
  & > div {
    float: left;
    white-space: nowrap;
  }
`;

export const FragmentChannelSelector = styled(FullRowCard)`
  float: right;
  align-self: right;
  flex-grow: 2;
  clear: none;
  width: auto;
  box-sizing: border-box;
  min-width: 100px;
  height: 50px;
  padding: 5px 20px;
  overflow: visible;
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const ChannelSelectorTitle = styled.div`
  grid-column: 1 / span 1;
  font-weight: bold;
  align-self: center;
  font-size: 12pt;
`;

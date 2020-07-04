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
  overflow : visible;
  height: 50px;
  margin-bottom: 10px;
  z-index: 10;
`;

export const FragmentViewSelector = styled(FullRowCard)`
  float: left;
  align-self: left;
  width: auto;
  text-align: right;
  display: grid;
  justify-items: left;
  box-sizing: border-box;
  padding: 0px 15px;
  font-weight: lighter;
  font-size: 10pt;
  padding: 5px 10px;
  clear: none;
  height: 50px;
  align-items: center;
  margin-right: 30px;
`;

export const FragmentChannelSelector = styled(FullRowCard)`
  float: right;
  align-self: right;
  flex-grow: 3;
  clear: none;
  width: auto;
  box-sizing: border-box;
  min-width: 100px;
  height: 50px;
  padding: 5px 20px;
  
`;

import styled from 'styled-components';
import { SvgIconStyle } from '../../../styles/global';

export const HeaderUserOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 45px;
  grid-template-rows: 45px;
`;

export const UserAvatar = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;

export const AvatarClipCounding = styled(SvgIconStyle)`
  border-radius: 50%;
  overflow: hidden;
`;

export const UserInformation = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 18px 18px;
  grid-template-columns: 1fr;
  padding: 6px 8px;
  text-align: right;

  & div:nth-child(2) {
    font-size: 7pt;
  }
`;

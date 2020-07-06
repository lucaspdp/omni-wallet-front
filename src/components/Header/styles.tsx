import styled from 'styled-components';
import { SvgIconStyle } from '../../styles/global';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 45px 200px 1fr 300px;
  grid-template-rows: 1fr;
  grid-column: 2 / span 1;
`;

export const BrandLogo = styled(SvgIconStyle)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;

export const BrandName = styled.div`
  line-height: 15px;
  font-weight: bold;
  align-self: center;
  font-size: 9pt;
`;

export const UserHeaderOptions = styled.div`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
`;

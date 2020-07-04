import React from 'react';
import iFoodLogo from '../../../../../assets/img/marketplaces/ifood-logo.svg';
import {
  Container,
  MarketplaceIcon,
  MarketplaceInfoColumn,
  MarketplaceInfoGrid,
  MarketplaceInfoRow,
  Info,
  Label,
  MarketplaceChartDisplay,
  ChartFilters,
  ChartFiltersTitle
} from './PickChannelStyles';
import { FullRowCard } from '../../FragmentStyles';

export default function PickChannelVisualization() {
  return (
    <Container>
      <FullRowCard>
        <MarketplaceInfoGrid>
          <MarketplaceIcon source={iFoodLogo} color={'#CA2125'}></MarketplaceIcon>

          <MarketplaceInfoColumn>
            <MarketplaceInfoRow>
              <Label>Receita total (bruta): </Label>
              <Info> R$50.000,00</Info>
            </MarketplaceInfoRow>
            <MarketplaceInfoRow>
              <Label>Receita total (líquida): </Label>
              <Info> R$40.000,00</Info>
            </MarketplaceInfoRow>
          </MarketplaceInfoColumn>

          <MarketplaceInfoColumn>
            <MarketplaceInfoRow>
              <Label>Início da operação:</Label>
              <Info>20/02/2020</Info>
            </MarketplaceInfoRow>
            <MarketplaceInfoRow>
              <Label>Plano Básico:</Label>
              <Info>15,5% de taxa + R$100,00 mensais</Info>
            </MarketplaceInfoRow>
          </MarketplaceInfoColumn>

         
        </MarketplaceInfoGrid>
        <MarketplaceChartDisplay>
          <ChartFilters>
            <ChartFiltersTitle>

            </ChartFiltersTitle>
          </ChartFilters>
        </MarketplaceChartDisplay>
      </FullRowCard>
      <FullRowCard>Channel 2</FullRowCard>
      <FullRowCard>Channel 3</FullRowCard>
      <FullRowCard>Channel 4</FullRowCard>
      <FullRowCard>Channel 5</FullRowCard>
    </Container>
  );
}

import React from 'react';
import iFoodLogo from '../../../../../assets/img/marketplaces/ifood-logo.svg';
import {
  Container
} from './PickChannelStyles';
import { FullRowCard } from '../../FragmentStyles';
import IFoodChannelCard from './marketplaces/iFoodChannelCard';

export default function PickChannelVisualization() {
  return (
    <Container>
      <FullRowCard>
        <IFoodChannelCard></IFoodChannelCard>
      </FullRowCard>
      <FullRowCard>Channel 2</FullRowCard>
      <FullRowCard>Channel 3</FullRowCard>
      <FullRowCard>Channel 4</FullRowCard>
      <FullRowCard>Channel 5</FullRowCard>
    </Container>
  );
}

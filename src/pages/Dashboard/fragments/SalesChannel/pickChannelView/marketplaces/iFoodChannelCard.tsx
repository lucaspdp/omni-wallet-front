import React from 'react';
import ChannelCard from '../ChannelCard';
import { Repository } from '../../../../../../data/marketplaces/MarketplaceRepository';

Repository.getMarketplace('iFood').then((marketplace) => {
  console.log('iFOOD', marketplace);
});

export default function IFoodChannelCard() {
  return (
    <ChannelCard
    name='iFood'
    ></ChannelCard>
  );
}

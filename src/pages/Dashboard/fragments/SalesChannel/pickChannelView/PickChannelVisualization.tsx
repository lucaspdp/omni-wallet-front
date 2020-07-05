import React, { useState } from 'react';
import { Container } from './PickChannelStyles';
import { FullRowCard } from '../../FragmentStyles';
import IFoodChannelCard from './marketplaces/iFoodChannelCard';
import B2WMarketplace from './marketplaces/B2WMarketplace';

export type PickChannelProps = {
  selectedChannels?: string[];
};

export default function PickChannelVisualization(props: PickChannelProps) {
  const [marketplaces, setMarketplaces] = useState([
    {
      name: 'iFood',
      channelView: <IFoodChannelCard></IFoodChannelCard>,
    },
    {
      name: 'b2w',
      channelView: <B2WMarketplace></B2WMarketplace>,
    },
  ]);

  return (
    <Container>
      {marketplaces.map((market) => {
        if (props.selectedChannels == null) return '';

        if (props.selectedChannels.length != 0 && props.selectedChannels.includes(market.name)) {
          return <FullRowCard>{market.channelView}</FullRowCard>;
        }

        if (props.selectedChannels.length == 0) return <FullRowCard>{market.channelView}</FullRowCard>;

        return '';
      })}
    </Container>
  );
}

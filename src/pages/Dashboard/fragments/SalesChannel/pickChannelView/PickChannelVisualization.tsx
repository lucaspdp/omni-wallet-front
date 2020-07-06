import React, { useState } from 'react';
import { Container } from './PickChannelStyles';
import IFoodChannelCard from './marketplaces/iFoodChannelCard';
import B2WMarketplace from './marketplaces/B2WMarketplace';
import ViaVarejoMarketplace from './marketplaces/ViaVarejoMarketplace';
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
    {
      name: 'viavarejo',
      channelView: <ViaVarejoMarketplace></ViaVarejoMarketplace>,
    },
  ]);

  function returnAllChannels() {
    return marketplaces.map((v) => v.channelView);
  }
  return (
    <Container>
      {(() => {
        if (props.selectedChannels == null) {
          return returnAllChannels();
        }

        if (props.selectedChannels.length == 0) {
          return returnAllChannels();
        }

        return props.selectedChannels.map((channel) => {
          return marketplaces.filter((c) => c.name == channel)[0].channelView;
        });
      })()}
    </Container>
  );
}

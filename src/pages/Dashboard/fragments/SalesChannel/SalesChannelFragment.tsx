import React, { useState } from 'react';
import {
  Container,
  ChannelVisualization,
  FragmentViewSelector,
  FragmentChannelSelector,
  FragmentHeader,
  FragmentViewSelectorTitle,
  ChannelSelectorTitle
} from './SalesChannelStyles';
import HorizontalMenu from '../../../../components/HorizontalMenu/HorizontalMenu';
import AllChannelsVisualization from './allChannelsView/AllChannelsVisualization';
import PickChannelVisualization from './pickChannelView/PickChannelVisualization';
import ChannelSelector from './channelSelector/ChannelSelector';

export default function SalesChannelFragment() {
  const [selectedView, setSelectedView] = useState('SingleChannel');
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const views: any = {
    AllChannels: {
      label: 'Todos os canais',
      channelVisualization: <AllChannelsVisualization />,
    },
    SingleChannel: {
      label: 'Por canal',
      channelVisualization: <PickChannelVisualization selectedChannels={selectedChannels} />,
    },
  };
  return (
    <Container>
      <FragmentHeader>
        <FragmentViewSelector>
          <FragmentViewSelectorTitle>Tipo de visualização:</FragmentViewSelectorTitle>
          <HorizontalMenu
            displayMenuTitle={false}
            onMenuItemClick={(id: string) => {
              setSelectedView(id);
            }}
            selectedItem={selectedView}
            items={views}
          ></HorizontalMenu>
        </FragmentViewSelector>
        <FragmentChannelSelector>
          <ChannelSelectorTitle>Canais cadastrados (3) : </ChannelSelectorTitle>
          <ChannelSelector onChange={(values) => setSelectedChannels(values)}></ChannelSelector>
        </FragmentChannelSelector>
      </FragmentHeader>
      <ChannelVisualization>
        {(() => {
          if (selectedView != '') return views[selectedView].channelVisualization;
          else return '';
        })()}
      </ChannelVisualization>
    </Container>
  );
}

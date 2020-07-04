import React, { useState } from 'react';
import { Container, Header, Body, SideMenu, BodyShadowFx } from './styles';
import { DashboardFragments } from './fragments/DashboardFragments';

export default function Dashboard() {

  const separatorAfter : (keyof typeof DashboardFragments)[] = [
    'Bills',
    'Recommendations'
  ];

  const [selectedItem, setSelectedItem] = useState<keyof typeof DashboardFragments>('SalesChannel');
  return (
    <Container>
      <Header></Header>
      <SideMenu
        selectedItem={selectedItem as string}
        onMenuItemClick={(id: string) => setSelectedItem(id as keyof typeof DashboardFragments)}
        items={DashboardFragments}
        separatorAfter={separatorAfter}
      ></SideMenu>
      <Body>{DashboardFragments[selectedItem].fragment}</Body>
      <BodyShadowFx />
    </Container>
  );
}

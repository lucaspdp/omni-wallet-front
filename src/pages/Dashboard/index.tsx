import React from 'react';
import { Container, Header, Body, SideMenu, BodyShadowFx } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header></Header>
      <SideMenu></SideMenu>
      <Body></Body>
      <BodyShadowFx />
    </Container>
  );
}

import React from 'react';
import { Container, Header, Body } from './styles';
import SideMenu from '../../components/SideMenu';

export default function Dashboard() {
  return (
    <Container>
      <Header></Header>
      <SideMenu></SideMenu>
      <Body></Body>
    </Container>
  );
}

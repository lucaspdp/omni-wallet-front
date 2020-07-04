import React from 'react';
import { Container, MenuIcon, MenuLabel } from './styles';

type MenuItemProps = {
  image : string;
  label : string;
};

export default function MenuItem(props : MenuItemProps) {

  return (
    <Container>
      <MenuIcon><img src={props.image} /></MenuIcon>
      <MenuLabel>{props.label}</MenuLabel>
    </Container>
  );
}

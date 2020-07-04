import React, { useState } from 'react';
import HamburguerMenuImg from '../../assets/img/icons/ham.menu.svg';
import AnalyticIcon from '../../assets/img/icons/analytics.svg';
import BrainIcon from '../../assets/img/icons/brain.svg';
import AppLogo from '../../assets/logo.svg';
import MenuItem from './MenuItem';
import { ISideMenuItem } from './ISideMenuItem';

import { Container, HarmburguerMenu, BrandContainer } from './styles';

export default function SideMenu() {

  const menuItens: ISideMenuItem[] = [
    {
      label: 'item 1',
      image: AnalyticIcon
    },
    {
      label: 'item 2',
      image: BrainIcon,
    },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <Container isExpanded={expanded}>
      <HarmburguerMenu>
        <img src={HamburguerMenuImg} />
      </HarmburguerMenu>
      <BrandContainer isExpanded={expanded}><img src={AppLogo} /></BrandContainer>
      { menuItens.map(item => ( <MenuItem label={item.label} image={item.image}></MenuItem> ) ) }
    </Container>
  )
}
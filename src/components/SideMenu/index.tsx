import React, { useState, MouseEvent } from 'react';
import HamburguerMenuImg from '../../assets/img/icons/ham.menu.thin.svg';
import AnalyticIcon from '../../assets/img/icons/analytics.svg';
import BrainIcon from '../../assets/img/icons/brain.svg';
import MenuItem from './MenuItem';
import { ISideMenuItem } from './ISideMenuItem';

import { Container } from './styles';

export default function SideMenu() {
  const menuItens: ISideMenuItem[] = [
    {
      _id: 'Item1',
      label: 'item 1',
      image: AnalyticIcon,
    },
    {
      _id: 'Item2',
      label: 'item 2',
      image: BrainIcon,
    },
  ];

  const sideMenuExpansionDelay = 900;

  const [selectedItem, setSelectedItem] = useState<string>('');
  const [expanded, setExpanded] = useState(false);
  const [sideMenuExpansionTimeout, setSideMenuExpansionTimeout] = useState(0);

  function delayedSideMenuExpansion(e: MouseEvent) {
    e.stopPropagation();
    if (sideMenuExpansionTimeout <= 0 && expanded === false) {
      let setTimeoutId = setTimeout(() => {
        setSideMenuExpansionTimeout(0);
        setExpanded(true);
      }, sideMenuExpansionDelay);

      setSideMenuExpansionTimeout(setTimeoutId);
    }
  }

  function cancelSideMenuExpansion(e: MouseEvent) {
    setExpanded(false);
    if (sideMenuExpansionTimeout > 0) {
      clearTimeout(sideMenuExpansionTimeout);
      setSideMenuExpansionTimeout(0);
    }
  }

  return (
    <Container isExpanded={expanded} onMouseEnter={delayedSideMenuExpansion} onMouseLeave={cancelSideMenuExpansion}>
      <MenuItem
        isExpanded={expanded}
        selectable={false}
        label={'Menu de Navegação'}
        iconSize={'60%'}
        image={HamburguerMenuImg}
      />

      {menuItens.map((item) => (
        <MenuItem
          key={item._id}
          isSelected={selectedItem === item._id}
          isExpanded={expanded}
          label={item.label}
          image={item.image}
          iconSize={'90%'}
          iconColor={'var(--primary-color)'}
          onClickFn={() => {
            setSelectedItem(item._id);
          }}
        ></MenuItem>
      ))}
    </Container>
  );
}

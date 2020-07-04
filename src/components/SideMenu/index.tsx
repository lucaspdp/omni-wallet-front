import React, { useState, MouseEvent } from 'react';
import AppLogo from '../../assets/logo.svg';
import HamburguerMenuImg from '../../assets/img/icons/ham.menu.thin.svg';
import MenuItem from './MenuItem';
import { ISideMenuItem } from './ISideMenuItem';

import { Container, MenuBrand, BrandContainer } from './styles';
import { SvgIconStyle } from '../../styles/global';

type SideMenuProps = {
  items: {
    [itemId: string]: {
      icon: string;
      label: string;
    };
  };
  selectedItem: string;
  onMenuItemClick: (id: string) => void;
};

export default function SideMenu(props: SideMenuProps) {
  let menuItens: ISideMenuItem[] = [];
  if (props.items) {
    for (const itemId in props.items) {
      const item = props.items[itemId];
      menuItens.push({ _id: itemId, ...item });
    }
  }

  const sideMenuExpansionDelay = 900;

  const [expanded, setExpanded] = useState(false);
  const [sideMenuExpansionTimeout, setSideMenuExpansionTimeout] = useState(0);

  function delayedSideMenuExpansion(e: MouseEvent) {
    e.stopPropagation();
    if (sideMenuExpansionTimeout <= 0 && expanded === false) {
      const setTimeoutId = setTimeout(() => {
        expandSideMenu();
      }, sideMenuExpansionDelay);

      setSideMenuExpansionTimeout(setTimeoutId);
    }
  }

  function toggleSideMenuExpansion() {
    if (expanded) cancelSideMenuExpansion();
    else expandSideMenu();
  }

  function expandSideMenu() {
    setSideMenuExpansionTimeout(0);
    setExpanded(true);
  }

  function cancelSideMenuExpansion() {
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
        onClickFn={toggleSideMenuExpansion}
      />
      <MenuBrand>
        <BrandContainer isExpanded={expanded}>
          <SvgIconStyle source={AppLogo} size={'60%'} color={'var(--primary-color)'}></SvgIconStyle>
        </BrandContainer>
      </MenuBrand>

      {menuItens.map((item) => (
        <MenuItem
          key={item._id}
          isSelected={props.selectedItem === item._id}
          isExpanded={expanded}
          label={item.label}
          image={item.icon}
          iconSize={'70%'}
          iconColor={'var(--primary-color)'}
          onClickFn={() => {
            if (sideMenuExpansionTimeout != 0) {
              cancelSideMenuExpansion();
            }

            props.onMenuItemClick(item._id);
          }}
        ></MenuItem>
      ))}
    </Container>
  );
}

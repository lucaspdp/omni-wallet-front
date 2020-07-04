import React, { useState } from 'react';
import { Container, MenuIcon, MenuLabel } from './styles';
import { SvgIconStyle } from '../../../styles/global';

type MenuItemProps = {
  image: string;
  label: string;
  isExpanded: boolean;
  isSelected?: boolean;
  iconColor?: string;
  iconSize?: string;
  selectable?: boolean;
  onClickFn?: () => void;
};

export default function MenuItem(props: MenuItemProps) {
  return (
    <Container
      selected={props.isSelected || false}
      selectable={props.selectable}
      expanded={props.isExpanded ?? false}
      onClick={props.onClickFn ?? (() => {})}
    >
      <MenuIcon>
        <SvgIconStyle
          color={props.isSelected ? '#FFF' : props.iconColor ?? '#404040'}
          size={props.iconSize}
          source={props.image}
        />
      </MenuIcon>
      <MenuLabel expanded={props.isExpanded ?? false}>{props.label}</MenuLabel>
    </Container>
  );
}

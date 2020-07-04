import React, { MouseEvent } from 'react';

import { Container, ItemIcon, ItemLabel } from './HorizontalMenuItemStyles';

export type HorizontalMenuItemProps = {
  icon?: string;
  title: string;
  isSelected : boolean;
  onClick: (e: MouseEvent) => void;
};
export default function HorizontalMenuItem(props: HorizontalMenuItemProps) {
  return (
    <Container selected={props.isSelected} onClick={props.onClick}>
      <ItemIcon hasIcon={props.icon != null}></ItemIcon>
      <ItemLabel>{props.title}</ItemLabel>
    </Container>
  );
}

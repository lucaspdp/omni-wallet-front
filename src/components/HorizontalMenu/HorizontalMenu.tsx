import React, { useState } from 'react';
import { Container, HorizontalMenuTitle, HorizontalMenuGroup } from './HorizontalMenuStyle';
import { IMenuItem } from '../SideMenu/ISideMenuItem';
import HorizontalMenuItem from './HorizontalMenuItem/HorizontalMenuItem';

export type HorizontalMenuProps = {
  displayMenuTitle: boolean;
  menuTitle?: string;
  items: {
    [itemId: string]: {
      icon?: string;
      label: string;
    };
  };
  selectedItem: string;
  onMenuItemClick: (id: string) => void;
  separatorAfter?: string[];
};

export default function HorizontalMenu(props: HorizontalMenuProps) {
  const [menuItens] = useState(
    (() => {
      const allItens: (Pick<IMenuItem,'label'|'_id'>&{icon? : string})[] = [];

      for (const itemId in props.items) {
        allItens.push({
          _id: itemId,
          ...props.items[itemId],
        });
      }
      return allItens;
    })(),
  );

  return (
    <Container>
      {props.displayMenuTitle ? <HorizontalMenuTitle>{props.menuTitle ?? 'Menu'}</HorizontalMenuTitle> : ''}
      <HorizontalMenuGroup>
        {menuItens.map((item) => (
          <HorizontalMenuItem
            key={item._id}
            title={item.label}
            icon={item.icon}
            isSelected={item._id === props.selectedItem}
            onClick={() => {
              props.onMenuItemClick(item._id);
            }}
          ></HorizontalMenuItem>
        ))}
      </HorizontalMenuGroup>
    </Container>
  );
}

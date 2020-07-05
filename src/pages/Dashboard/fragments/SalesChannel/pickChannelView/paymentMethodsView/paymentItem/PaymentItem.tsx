import React from 'react';

import { ColorHolder, Title, Amount, Container } from './PaymentItemStyles';

export type PaymentItemProps = {
  color: string;
  title: string;
  quantity: number;
  displayInfo?: 'quantity' | 'total';
};

export default function PaymentItem(props: PaymentItemProps) {
  return (
    <Container>
      <ColorHolder color={props.color}>
        <div>
          <div className="white-circle"></div>
        </div>
      </ColorHolder>
      <Title>{props.title}</Title>
      <Amount>{`${props.quantity} vendas`}</Amount>
    </Container>
  );
}

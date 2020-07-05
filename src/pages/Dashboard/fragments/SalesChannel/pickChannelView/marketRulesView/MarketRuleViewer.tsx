import React from 'react';

import { Container } from './MarketRulerViewerStyles';


export type PaymentItemProps = {
  logo : string;
  color: string;
  title: string;
  quantity: number;
  displayInfo?: 'quantity' | 'total';
};

export default function PaymentItem(props: PaymentItemProps) {
  return (
    <Container>
      
    </Container>
  );
}

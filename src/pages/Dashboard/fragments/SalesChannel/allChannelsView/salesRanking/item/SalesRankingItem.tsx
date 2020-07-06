import React from 'react';
import { Container, Rank, Name, Amount, Quantity } from './SalesRankingItemStyles';

export type SalesRankingItemProps = {
  rank: number;
  product: string;
  amount: number;
  quantity: number;
  photo?: string;
};

export default function SalesRankingItem(props: SalesRankingItemProps) {
  return (
    <Container>
      <Rank>{props.rank}</Rank>
      <Name>{props.product}</Name>
      <Amount>{props.amount}</Amount>
      <Quantity>{props.quantity}</Quantity>
    </Container>
  );
}

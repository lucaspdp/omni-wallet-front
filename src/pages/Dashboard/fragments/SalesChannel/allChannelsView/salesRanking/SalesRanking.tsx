import React from 'react';
import {Container, Header, ListGroup } from './SalesRankingStyles';
import SalesRankingItem from './item/SalesRankingItem';

export type SalesRankingProps = {
  topSaleDetails : {
    product : string;
    amount : number;
    quantity : number;
    photo? : string;
  }[];
};

export default function SalesRanking(props : SalesRankingProps) {
  let counter = 0;
  return(
    <Container>
      <Header>
    Ranking dos itens mais pedidos!
      </Header>
      <ListGroup>
        {props.topSaleDetails.map(product => (
          <SalesRankingItem
          key={product.product}
          rank={++counter}
            {...product}
            ></SalesRankingItem>
        ))}
      </ListGroup>
    </Container>
  )

}
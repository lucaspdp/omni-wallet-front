import React from 'react';

import { Header, Container, ActionLink } from './PaymentMethodsMarketViewStyles';
import { paymentMethods } from '../../../../../../data/paymentMethods/PaymentMethodsRepository';
import PaymentItem from './paymentItem/PaymentItem';

export type PaymentMethodsViewProps = {
  paymentMethods: {
    [name: string]: {
      name: string;
      quantity: number;
      totalAmount: number;
    };
  };
};

export default function PaymentMethodsMarketView(props: PaymentMethodsViewProps) {
  return (
    <Container>
      <Header>Formas de pagamento mais utilizadas:</Header>
      {(() => {
        const allMethods: JSX.Element[] = [];
        let orderedMethods = Array.from(Object.values(props.paymentMethods)).sort((a, b) =>
          a.quantity > b.quantity ? -1 : 1,
        );
        for (let payment of orderedMethods) {
          let payData = paymentMethods.filter((method) => method.name === payment.name)[0];
          allMethods.push(
            <PaymentItem
              key={payment.name}
              title={payData.title}
              color={payData.color}
              quantity={payment.quantity}
            ></PaymentItem>,
          );
        }
        return allMethods;
      })()}
      <ActionLink>Acompanhar datas de repasses</ActionLink>
    </Container>
  );
}

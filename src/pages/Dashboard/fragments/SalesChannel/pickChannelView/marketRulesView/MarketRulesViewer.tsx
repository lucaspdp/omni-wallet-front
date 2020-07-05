import React from 'react';

import {
  CardEnvelop,
  Container,
  Header,
  PaymentLogo,
  PaymentInfoColumn,
  MarketPaymentImpact,
  MarketPaymentInfoContainer,
  ActionLink,
} from './MarketRulerViewerStyles';
import { getRandonPaymentMethod } from '../../../../../../data/paymentMethods/PaymentMethodsRepository';

export type MarketRulesViewerProps = {
  logo?: string;
  color?: string;
  title?: string;
  amount: number;
  marketTax: number;
  paymentTax?: number;
  displayInfo?: 'quantity' | 'total';
};

const randomPayment = getRandonPaymentMethod();
let totalTax = 100;
randomPayment.splitRules.forEach((rule) => {
  totalTax = rule(totalTax).incomeValue;
});

totalTax = 100 - totalTax;

export default function MarketRulesViewer(props: MarketRulesViewerProps) {
  return (
    <Container>
      <Header>Pontos de venda: taxas e despesas adicionais</Header>
      <CardEnvelop>
        <MarketPaymentInfoContainer>
          <PaymentLogo>
            <img src={randomPayment.logo} />
          </PaymentLogo>
          <PaymentInfoColumn>
            Débito: 1,99% <span>|</span> Crédito a vista: 4,49%
          </PaymentInfoColumn>
          <PaymentInfoColumn>Crédito parcelado: 4,49% + 2,99% por parcela</PaymentInfoColumn>
        </MarketPaymentInfoContainer>
        <MarketPaymentImpact>
          <div style={{ width: `100%` }}>{props.amount}</div>
          <div style={{ width: `${100 - (totalTax * 3)}%` }}>{props.amount * (1 - totalTax / 100)}</div>
          <div style={{ width: `${100 - (totalTax + props.marketTax) * 3}%` }}>
            {props.amount * (1 - (totalTax + props.marketTax) / 100)}
          </div>
        </MarketPaymentImpact>
        <ActionLink>Antecipação financeira solicitada</ActionLink>
      </CardEnvelop>
    </Container>
  );
}

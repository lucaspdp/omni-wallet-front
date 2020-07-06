import React, { useState } from 'react';

import { 
  Container,
  PaymentContainer,
  CompareButton
} from './styles';

import Cielo from '../../../../assets/img/paymentMethods/cielo.svg';
import Stone from '../../../../assets/img/paymentMethods/stone.png';
import Redecard from '../../../../assets/img/paymentMethods/redecard.png';

import Paypal from '../../../../assets/img/paymentMethods/paypal.svg';
import Pagseguro from '../../../../assets/img/paymentMethods/pagseguro.png';

import iFood from '../../../../assets/img/marketplaces/ifood.png';
import Rappi from '../../../../assets/img/marketplaces/rappi.png';
import Americanas from '../../../../assets/img/marketplaces/americanas.png';

import { random } from 'faker';

export default function SimulationFragment() {

  const [paymentMethodOffline, setPaymentMethodOffline] = useState('Cielo');
  const [paymentMethodOnline, setPaymentMethodOnline] = useState('Cielo');
  const [Marketplace, setMarketplace] = useState('iFood');

  const paymentMethodsOffline = [{
    name: 'Cielo',
    image: Cielo,
    taxa: '15,5 % por transação + R$100,00 mensais (Plano Básico sem entregador)',
    pagamento: 'Divide o valor do repasse por semana, pagando sempre as quarta-feira, 4 semanas após a venda'
  },{
    name: 'Stone',
    image: Stone,
    taxa: '15,5 % por transação + R$100,00 mensais (Plano Básico sem entregador)',
    pagamento: 'Divide o valor do repasse por semana, pagando sempre as quarta-feira, 4 semanas após a venda'
  },{
    name: 'Redecard',
    image: Redecard,
    taxa: '3,49 % em pagamentos o a vista e 3,49% em pagamentos parcelados',
    pagamento: 'Quando paga: Divide o valor do repasse por semana, pagando sempre as quarta-feira, 4 semanas após a venda'
  }];

  const paymentMethodsOnline = [{
    name: 'Cielo',
    image: Cielo,
    taxa: '15,5 % por transação + R$100,00 mensais (Plano Básico sem entregador)',
    pagamento: 'Divide o valor do repasse por semana, pagando sempre as quarta-feira, 4 semanas após a venda'
  },{
    name: 'Paypal',
    image: Paypal,
    taxa: '14,79% mais R$ 0,60 fixo por transações à vista. Vendas parceladas a taxa é de 1,92%.',
    pagamento: 'Repasse de todas as compras é feito em até 24 horas após a venda'
  },{
    name: 'Pagseguro',
    image: Pagseguro,
    taxa: '4,49 + 0,40 de adesão e 2,99% mensais para habilitar pagamento parcelado',
    pagamento: '14 ou 31 dias após a venda'
  }];

  const MarketplacesMethods = [{
    name: 'iFood',
    image: iFood,
    taxa: '15,5 % por transação + R$100,00 mensais (Plano Básico sem entregador)',
    pagamento: 'Divide o valor do repasse por semana, pagando sempre as quarta-feira, 4 semanas após a venda'
  },{
    name: 'Rappi',
    image: Rappi,
    taxa: '3,5% por transação',
    pagamento: 'Vendas da 1ª quinzena caem dia 8 do mês seguinte, da 2ª quinzena caem dia 23 do mês seguinte'
  },{
    name: 'Americanas',
    image: Americanas,
    taxa: '16% por transação',
    pagamento: 'Vendas da 1ª quinzena caem dia 5 do mês seguinte, da 2ª quinzena caem dia 20 do mês seguinte'
  }];

  return (
    <Container>
      <PaymentContainer>
        <span className="type">
          Pagamentos - loja física: 
          <span className="detail">Compare o custo benefício de diferentes operadores de pagamentos</span>
        </span>
        <div className="paymentMethods">
          {paymentMethodsOffline.map(method=>(
            <div className="paymentCard" id={method.name + random.number(100)} >
              <img src={method.image} alt={method.name}/>
              <span className="sub">
                Taxa: <span className="desc">{method.taxa}</span>
              </span>
              <span className="sub">
                Quando paga: <span className="desc">{method.pagamento}</span>
              </span>
              <span className={`now ${method.name == paymentMethodOffline && 'active'}`}>
                Utilizando atualmente
              </span>
              <button type="button">
                Simular uso
              </button>

            </div>
          ))}
        </div>
        <CompareButton>
          Comparar
        </CompareButton>
      </PaymentContainer>
      
      <PaymentContainer>
        <span className="type">
          Pagamentos - loja online: 
          <span className="detail">Compare o custo benefício de diferentes operadores de pagamentos</span>
        </span>
        <div className="paymentMethods">
          {paymentMethodsOnline.map(method=>(
            <div className="paymentCard" id={method.name + random.number(100)} >
              <img src={method.image} alt={method.name}/>
              <span className="sub">
                Taxa: <span className="desc">{method.taxa}</span>
              </span>
              <span className="sub">
                Quando paga: <span className="desc">{method.pagamento}</span>
              </span>
              <span className={`now ${method.name == paymentMethodOnline && 'active'}`}>
                Utilizando atualmente
              </span>
              <button type="button">
                Simular uso
              </button>

            </div>
          ))}
        </div>
        <CompareButton>
          Comparar
        </CompareButton>
      </PaymentContainer>
            
      <PaymentContainer>
        <span className="type">
          Market Places: 
          <span className="detail">Compare o custo benefício dos principais marketplaces do mercado</span>
        </span>
        <div className="paymentMethods">
          {MarketplacesMethods.map(method=>(
            <div className="paymentCard" id={method.name + random.number(100)} >
              <img src={method.image} alt={method.name}/>
              <span className="sub">
                Taxa: <span className="desc">{method.taxa}</span>
              </span>
              <span className="sub">
                Quando paga: <span className="desc">{method.pagamento}</span>
              </span>
              <span className={`now ${method.name == Marketplace && 'active'}`}>
                Utilizando atualmente
              </span>
              <button type="button">
                Simular uso
              </button>

            </div>
          ))}
        </div>
        <CompareButton>
          Comparar
        </CompareButton>
      </PaymentContainer>
    </Container>
  );
}
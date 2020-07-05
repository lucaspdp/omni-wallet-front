import { IPaymentMethod } from './IPaymentMethod';
import MoneyLogo from '../../assets/img/paymentMethods/money.svg';
import PayPalLogo from '../../assets/img/paymentMethods/paypal.svg';
import PagarMeLogo from '../../assets/img/paymentMethods/pagarme.svg';
import VisaCardLogo from '../../assets/img/paymentMethods/visa.svg';
import MasterCardLogo from '../../assets/img/paymentMethods/mastercard.svg';

export const paymentMethods: IPaymentMethod[] = [
  {
    name: 'MONEY',
    title: 'Dinheiro',
    logo: MoneyLogo,
    color: '#ffda83',

    daysToTransfer : 0,
    splitRules: [
      (order) => ({
        originalValue: order,
        discount: 0,
        incomeValue: order,
        taxPercentage: 0,
      }),
    ],
  },
  {
    name: 'PAYPAL',
    title: 'PayPal',
    logo: PayPalLogo,
    daysToTransfer : 7,
    color: '#f71963',
    splitRules: [
      (price) => {
        const tax = 2.3;
        return {
          originalValue: price,
          discount: price * (tax / 100),
          incomeValue: (price * (100 - tax)) / 100,
          taxPercentage: tax,
        };
      },
    ],
  },
  {
    name: 'PAGARME',
    title: 'PagarMe',
    logo: PagarMeLogo,
    color: '#a3a0fb',
    daysToTransfer : 10,
    splitRules: [
      (price) => {
        const tax = 4.6;
        return {
          originalValue: price,
          discount: price * (tax / 100),
          incomeValue: (price * (100 - tax)) / 100,
          taxPercentage: tax,
        };
      },
    ],
  },
  {
    name: 'CARD_VISA',
    title: 'Visa',
    color: '#00d0fb',
    logo: VisaCardLogo,
    daysToTransfer : 30,
    splitRules: [
      (price) => {
        const tax = 5.6;
        return {
          originalValue: price,
          discount: price * (tax / 100),
          incomeValue: (price * (100 - tax)) / 100,
          taxPercentage: tax,
        };
      },
    ],
  },
  {
    name: 'CARD_MASTER',
    title: 'MasterCard',
    color: '#f581ed',
    logo: MasterCardLogo,
    daysToTransfer : 60,
    splitRules: [
      (price) => {
        const tax = 1.6;
        return {
          originalValue: price,
          discount: price * (tax / 100),
          incomeValue: (price * (100 - tax)) / 100,
          taxPercentage: tax,
        };
      },
    ],
  },
];

export function getRandonPaymentMethod(): IPaymentMethod {
  return paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
}

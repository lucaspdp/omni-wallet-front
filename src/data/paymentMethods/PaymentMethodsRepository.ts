import { IPaymentMethod } from './IPaymentMethod';
import MoneyLogo from '../../assets/img/icons/money.svg';
import PayPalLogo from '../../assets/img/icons/money.svg';
import PagarMeLogo from '../../assets/img/icons/money.svg';
import VisaCardLogo from '../../assets/img/icons/money.svg';
import MasterCardLogo from '../../assets/img/icons/money.svg';

export class PaymentMethodsRepository {}
const paymentMethods: IPaymentMethod[] = [
  {
    name: 'MONEY',
    title: 'Dinheiro',
    logo: MoneyLogo,
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

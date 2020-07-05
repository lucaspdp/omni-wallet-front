import { IPaymentMethod } from './IPaymentMethod';
import { CardInfo } from './CardInfo';

export interface IPayment {
  method: IPaymentMethod;
  extraInfo: CardInfo | any;
  status: 'TRANSFERED' | 'PENDING' | 'REFUNDED';
  willTransferIn: Date;
  totalAmount: number;
  transferedValue: number;
}

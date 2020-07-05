import { IProductInfo } from './product/IProductInfo';
import { ISplitRule } from './splitRules/ISplitRule';
import { IPayment } from './paymentMethods/IPayment';

let products: IProductInfo[] = [];
let orders: IMarketplaceOrder[] = [];

// Don't judge me...
let orderStatusRandom = [
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'PAID',
  'REQUESTED',
  'CANCELLED',
  'RETURNED',
];

export interface IMarketplaceOrder {
  status: string;
  order_date: Date;
  productItens: IOrderProductItem[];
  total_price: number;
  payment: IPayment;
}

const paymenthMethods = ['CARD', 'MONEY', 'PAYPAL', 'PAGARME'] as const;

export interface IOrderProductItem {
  product: IProductInfo;
  value: number;
  quantity: number;
  discount: number;
  total_value: number;
}

export interface IMarketplaceData {
  name: string;
  logo: string;
  planInfo: string;
  splitRules: ISplitRule[];
  joinedOnDate: Date;
  orders: IMarketplaceOrder[];
  products: IProductInfo[];
  orderStatus: string[];
  color_theme?: string;
}

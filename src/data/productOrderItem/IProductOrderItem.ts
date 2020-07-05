import { IProductInfo } from '../product/IProductInfo';

export interface IProductOrderItem {
  product: IProductInfo;
  value: number;
  quantity: number;
  discount: number;
  total_value: number;
}
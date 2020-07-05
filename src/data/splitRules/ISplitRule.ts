import { IMarketplaceOrder } from '../DataMock';

export type ISplitRule = (originalValue : number) => {
  originalValue : number;
  discount: number;
  incomeValue : number;
  taxPercentage : number;
} 
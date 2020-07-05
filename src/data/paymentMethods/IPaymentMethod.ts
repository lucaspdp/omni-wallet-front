import { ISplitRule } from '../splitRules/ISplitRule';

export interface IPaymentMethod {
  name: string;
  title : string;
  logo: string;
  splitRules:  ISplitRule[];
  daysToTransfer : number;
  color: string;
}

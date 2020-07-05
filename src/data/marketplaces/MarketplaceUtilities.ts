import { IMarketplaceOrder } from '../DataMock';
import { IProductInfo } from '../product/IProductInfo';
import moment from 'moment';

interface MarketplaceUtilitiesParam {
  orders: IMarketplaceOrder[];
  products: IProductInfo[];
}

export type OrderCategorizer = (order: IMarketplaceOrder) => string;

export class MarketplaceUtilities {
  private _orders: IMarketplaceOrder[];
  private _products: IProductInfo[];

  constructor({ orders, products }: MarketplaceUtilitiesParam) {
    this._orders = orders;
    this._products = products;
  }

  public getReceitaBruta(): number {
    let acummulator = 0;

    this._orders.forEach((order) => {
      acummulator += order.payment.totalAmount;
    });

    return acummulator;
  }

  public getReceitaLiquida(): number {
    let acummulator = 0;

    this._orders.forEach((order) => {
      acummulator += order.payment.transferedValue;
    });

    return acummulator;
  }

  public getTotalPriceByDay(range?: { start: Date; end: Date }) {
    const priceByDay: {
      [dayStr: string]: {
        price: number;
        splitPrice: number;
        date: moment.Moment;
      };
    } = {};

    let sortedOrders = this._orders.sort((a, b) => (a.order_date > b.order_date ? 1 : -1));

    sortedOrders.forEach((order) => {
      let d: moment.Moment;

      if (typeof order.order_date === 'string') {
        d = moment((order.order_date as string).slice(0, -1), 'YYYY-MM-DDTHH:mm:ssS');
      } else {
        d = moment(order.order_date as Date);
      }
      // Skip out of range values
      if (range != null) {
        if (d.isBefore(range.start) || d.isAfter(range.end)) return;
      }

      let dFormat = d.format('YYYY-MM-DD');
      if (priceByDay[dFormat] == null) {
        let splitPrice = order.amount_after_split;

        order.payment.method.splitRules.forEach((rule) => {
          splitPrice = rule(splitPrice).incomeValue;
        });

        priceByDay[dFormat] = {
          date: d,
          price: order.total_price,
          splitPrice: order.amount_after_split,
        };
      } else {
        priceByDay[dFormat].price += order.total_price;
        priceByDay[dFormat].splitPrice += order.amount_after_split;
      }
    });

    return priceByDay;
  }

  public getPricesByPaymentMethods(range?: { start: Date; end: Date }) {
    const priceByPayment: {
      [name: string]: {
        name: string;
        quantity: number;
        totalAmount: number;
      };
    } = {};

    this._orders.forEach((order) => {
      const methodName = order.payment.method.name;

      let d: moment.Moment;
      if (typeof order.order_date === 'string') {
        d = moment((order.order_date as string).slice(0, -1), 'YYYY-MM-DDTHH:mm:ssS');
      } else {
        d = moment(order.order_date as Date);
      }
      // Skip out of range values
      if (range != null) {
        if (d.isBefore(range.start) || d.isAfter(range.end)) return;
      }

      if (priceByPayment[methodName] == null) {
        priceByPayment[methodName] = {
          name: methodName,
          quantity: 1,
          totalAmount: order.total_price,
        };
      } else {
        priceByPayment[methodName].quantity++;
        priceByPayment[methodName].totalAmount += order.total_price;
      }
    });

    return priceByPayment;
  }

  public getMostSelledProduct(): IProductInfo {
    let topProduct!: IProductInfo;
    let topProductAmount: number = 0;
    let topProductCode: string = '';

    const productsTotalizer: {
      [productCode: string]: number;
    } = {};

    this._orders.forEach((order) => {
      order.productItens.forEach((item) => {
        const code = item.product.product_code;

        // Update totalizer
        if (productsTotalizer[code] === undefined) productsTotalizer[code] = item.quantity;
        else productsTotalizer[code] += item.quantity;
      });
    });

    for (let code in productsTotalizer) {
      if (productsTotalizer[code] > topProductAmount) {
        topProductCode = code;
        topProductAmount = productsTotalizer[code];
      }
    }

    this._products.forEach((p) => {
      if (p.product_code === topProductCode) topProduct = p;
    });

    return topProduct;
  }

  public getProductWithMostRevenue(): IProductInfo {
    let topProduct!: IProductInfo;
    let topProductAmount: number = 0;
    let topProductCode: string = '';

    const productsTotalizer: {
      [productCode: string]: number;
    } = {};

    this._orders.forEach((order) => {
      order.productItens.forEach((item) => {
        const code = item.product.product_code;

        // Update totalizer
        if (productsTotalizer[code] === undefined) productsTotalizer[code] = item.total_value;
        else productsTotalizer[code] += item.total_value;
      });
    });

    for (let code in productsTotalizer) {
      if (productsTotalizer[code] > topProductAmount) {
        topProductCode = code;
        topProductAmount = productsTotalizer[code];
      }
    }

    this._products.forEach((p) => {
      if (p.product_code === topProductCode) topProduct = p;
    });

    return topProduct;
  }
}

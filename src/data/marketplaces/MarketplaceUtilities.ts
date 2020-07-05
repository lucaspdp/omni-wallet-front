import { IMarketplaceOrder } from '../DataMock';
import { IProductInfo } from '../product/IProductInfo';

interface MarketplaceUtilitiesParam {
  orders: IMarketplaceOrder[];
  products: IProductInfo[];
}

export type OrderCategorizer = (order: IMarketplaceOrder) => string;

export class MarketplaceUtilities {
  private _orders: IMarketplaceOrder[];
  private _products: IProductInfo[];
  private _priceByDay?: {
    [dayString: string]: number;
  };

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
    if (this._priceByDay != null) return this._priceByDay;

    const priceByDay: {
      [dayString: string]: number;
    } = {};

    this._orders.forEach((order) => {
      // Skip out of range values
      if (range != null) {
        if (order.order_date < range.start || order.order_date > range.end) return;
      }

      let d = new Date(order.order_date);
      let dayStr = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      if (priceByDay[dayStr] === undefined) priceByDay[dayStr] = order.total_price;
      else priceByDay[dayStr] += order.total_price;
    });

    this._priceByDay = priceByDay;

    return priceByDay;
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

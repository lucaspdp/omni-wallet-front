import { IMarketplaceData, IMarketplaceOrder } from '../DataMock';
import Faker from 'faker';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { IProductInfo } from '../product/IProductInfo';
import IFoodLogo from '../../assets/img/marketplaces/ifood-logo.svg';
import B2WLogo from '../../assets/img/marketplaces/b2w-logo.svg';
import ViaVarejoLogo from '../../assets/img/marketplaces/via-varejo-logo.svg';
import { IProductOrderItem } from '../productOrderItem/IProductOrderItem';
import { IPayment } from '../paymentMethods/IPayment';
import { IPaymentMethod } from '../paymentMethods/IPaymentMethod';
import { getRandonPaymentMethod } from '../paymentMethods/PaymentMethodsRepository';
import { ISplitRule } from '../splitRules/ISplitRule';

const generatedProducts: {
  [marketName: string]: IProductInfo[];
} = {};

const generatedOrders: {
  [marketName: string]: IMarketplaceOrder[];
} = {};

export class MarketplaceRepository {
  private static productGenerationRules = {
    amount: 50,
    maxPrice: 30,
    minPrice: 8,
  };
  private static ordersGenerationRules = {
    amount: 8000,
    maxPrice: 100,
    minPrice: 8,
  };

  private static productItemGenerationRules = {
    maxQuantity: 4,
    minQuantity: 1,
    maxDiscount: 5,
    maxTax: 8,
  };
  private static LOCAL_PRODUCTS_CACHE_NAME = 'GEN_PRODUCTS';

  private static LOCAL_ORDERS_CACHE_NAME = 'GEN_ORDERS';

  protected generatedProducts: {
    [marketName: string]: IProductInfo[];
  } = {};

  protected generatedOrders: {
    [marketName: string]: IMarketplaceOrder[];
  } = {};

  protected maxAgeOfOrders: Date = moment().subtract(15, 'month').toDate();
  protected maxPostDateOfOrders: Date = moment().add(3, 'month').toDate();

  constructor() {
    this.generatedOrders = generatedOrders;
    this.generatedProducts = generatedProducts;
  }

  public async getMarketplace(name: string): Promise<IMarketplaceData> {
    const marketPromise = new Promise<IMarketplaceData>((resolve, reject) => {
      // --> Server logic here

      if (Marketplaces[name] != null) {
        this.populateMarketplace(Marketplaces[name]);
        resolve(Marketplaces[name]);
      } else {
        reject(`Marketplace with name ${name} does not exists!`);
      }
    });

    return marketPromise;
  }

  public populateMarketplace(marketplace: IMarketplaceData) {
    if (this.generatedProducts[marketplace.name] == null) {
      this.generatedProducts[marketplace.name] = this.generateProducts();
      generatedProducts[marketplace.name] = this.generatedProducts[marketplace.name];
    }

    marketplace.products = this.generatedProducts[marketplace.name];

    const products = this.generatedProducts[marketplace.name]!;

    if (this.generatedOrders[marketplace.name] == null) {
      this.generatedOrders[marketplace.name] = this.generateOrders(
        products,
        marketplace.orderStatus,
        marketplace.splitRules,
      );
      generatedOrders[marketplace.name] = this.generatedOrders[marketplace.name];
    }

    marketplace.orders = this.generatedOrders[marketplace.name];
  }

  public generateOrders(fromProducts: IProductInfo[], status: string[], splitRules: ISplitRule[]): IMarketplaceOrder[] {
    const orders: IMarketplaceOrder[] = [];
    const config = MarketplaceRepository.ordersGenerationRules;

    for (let a = 0; a < config.amount; a++) {
      let itens = this.generateProductItens(fromProducts);

      const totalPrice = itens.reduce((v, v2) => {
        v2.total_value += v.total_value;
        return v2;
      }).total_value;

      let afterSplitAmount = totalPrice;
      for (let splitRule of splitRules) {
        afterSplitAmount = splitRule(afterSplitAmount).incomeValue;
      }

      let orderDate: Date;

      orderDate = Faker.date.between(this.maxAgeOfOrders, this.maxPostDateOfOrders);

      orders.push({
        status: Math.random() > 0.7 ? status[this.getRandomInt(0, status.length - 1)] : 'PAID',
        order_date: orderDate,
        productItens: itens,
        total_price: totalPrice,
        amount_after_split: afterSplitAmount,
        payment: this.generatePayment(totalPrice, orderDate),
      });
    }

    return orders;
  }

  public generatePayment(value: number, orderDate: Date): IPayment {
    const method: IPaymentMethod = getRandonPaymentMethod();
    const transferDate = new Date(orderDate.setDate(orderDate.getDate() + method.daysToTransfer));
    const payment: IPayment = {
      method,
      status: 'TRANSFERED',
      totalAmount: value,
      transferedValue: method.splitRules[0](value).incomeValue,
      willTransferIn: transferDate,
      extraInfo: {
        customer: Faker.name.findName(),
        age: Faker.random.number(),
      },
    };

    return payment;
  }

  public generateProductItens(fromProducts: IProductInfo[]): IProductOrderItem[] {
    const itens: IProductOrderItem[] = [];
    const config = MarketplaceRepository.productItemGenerationRules;
    const amount = this.getRandomInt(config.minQuantity, config.maxQuantity);

    for (let a = 0; a < amount; a++) {
      let prod = fromProducts[this.getRandomInt(0, fromProducts.length - 1)];
      let sellValue = prod.price + this.getRandomInt(-config.maxDiscount, config.maxTax);
      let quantity = this.getRandomInt(1, 4);

      itens.push({
        product: prod,
        value: sellValue,
        quantity: quantity,
        discount: prod.price - sellValue,
        total_value: sellValue * quantity,
      });
    }
    return itens;
  }

  public generateProducts(): IProductInfo[] {
    const products: IProductInfo[] = [];
    const config = MarketplaceRepository.productGenerationRules;

    for (let a = 0; a < (config.amount ?? 50); a++) {
      products.push({
        image: Faker.image.food(),
        name: Faker.name.title(),
        price: this.getRandomInt(config.maxPrice * 100, config.minPrice * 100) / 100,
        product_code: nanoid(16),
      });
    }

    return products;
  }

  public getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
export const Repository = new MarketplaceRepository();

const Marketplaces: {
  [name: string]: IMarketplaceData;
} = {
  iFood: {
    name: 'iFood',
    color_theme: '#CA2125',
    logo: IFoodLogo,
    joinedOnDate: Faker.date.recent(200),
    orderStatus: ['DELIVERED', 'PAID', 'CANCELLED', 'RETURNED'],
    splitRules: [
      (price: number) => {
        const tax = 15.5;
        return {
          taxPercentage: tax,
          discount: price * (tax / 100),
          originalValue: price,
          incomeValue: (price * (100 - tax)) / 100,
        };
      },
    ],
    orders: [],
    products: [],
    planInfo: '15,5% dos pedidos',
  },
  b2w: {
    name: 'b2w',
    logo: B2WLogo,
    joinedOnDate: Faker.date.recent(200),
    orderStatus: ['DELIVERED', 'PAID', 'CANCELLED', 'RETURNED'],
    splitRules: [
      (price: number) => {
        const tax = 10.2;
        return {
          taxPercentage: tax,
          discount: price * (tax / 100),
          originalValue: price,
          incomeValue: (price * (100 - tax)) / 100,
        };
      },
    ],
    orders: [],
    products: [],
    planInfo: '10,2% dos pedidos',
  },
  viaVarejo: {
    name: 'viavarejo',
    logo: ViaVarejoLogo,
    joinedOnDate: Faker.date.recent(200),
    orderStatus: ['DELIVERED', 'PAID', 'CANCELLED', 'RETURNED'],
    splitRules: [
      (price: number) => {
        const tax = 8.75;
        const discount = Math.floor(price / 100) * 5 + price * (tax / 100);
        return {
          taxPercentage: tax,
          discount: discount,
          originalValue: price,
          incomeValue: price - discount,
        };
      },
    ],
    orders: [],
    products: [],
    planInfo: '8,75% dos pedidos + 5 reais a cada 100 reais',
  },
};

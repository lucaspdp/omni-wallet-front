import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Line, Area } from 'recharts';

import {
  MarketplaceInfoGrid,
  MarketplaceInfoColumn,
  MarketplaceInfoRow,
  Label,
  Info,
  MarketplaceChartDisplay,
  ChartFilters,
  ChartFilterPickTimeInterval,
  ChartFiltersTitle,
  ChartFilterPickTimeUnit,
  MarketplacePerformanceChart,
  MarketResumeContainer,
  MarketRulesView,
  PaymentMethodsView,
  MarketAndPaymentContainer,
} from './ChannelCardStyles';
import { FullRowCard } from '../../FragmentStyles';
import { CurrencyFormatter, DateFormatter } from '../../../../../data/Intl';
import Select from 'react-select';
import { MarketplaceUtilities } from '../../../../../data/marketplaces/MarketplaceUtilities';
import { Repository } from '../../../../../data/marketplaces/MarketplaceRepository';
import { IMarketplaceData } from '../../../../../data/DataMock';
import MoneyBagIcon from '../../../../../assets/img/icons/money.bag.svg';
import ShopCartIcon from '../../../../../assets/img/icons/shop.cart.svg';
import TrendDownIcon from '../../../../../assets/img/icons/trend.down.svg';
import TrendUpIcon from '../../../../../assets/img/icons/trend.up.svg';
import TrendEqualIcon from '../../../../../assets/img/icons/trend.equal.svg';
import MarketPerformanceResumeCard from './marketPerformanceResumeCard/MarketPerformanceResumeCard';
import { timeIntervalBuilders } from './timeUtils/TimeUtils';
import PaymentMethodsMarketView, { PaymentMethodsViewProps } from './paymentMethodsView/PaymentMethodsMarketView';
import MarketRulesViewer from './marketRulesView/MarketRulesViewer';

export type TimeIntervalOption = {
  value: string;
  label: string;
  start: Date;
  end: Date;
};

export type ChannelCardProps = {
  name: string;
};

export default function ChannelCard(props: ChannelCardProps) {
  const [marketPlace, setMarketPlace] = useState<IMarketplaceData | undefined>(undefined);
  const [utilities, setUtilities] = useState<MarketplaceUtilities | undefined>();
  const [paymentMethodsData, setPaymentMethodsData] = useState<{
    [name: string]: {
      name: string;
      quantity: number;
      totalAmount: number;
    };
  }>({});
  const [timeUnits] = useState([
    {
      value: 'day',
      label: 'Diário',
    },
    {
      value: 'week',
      label: 'Semanais',
    },
    {
      value: 'month',
      label: 'Mensais',
    },
    {
      value: 'year',
      label: 'Anuais',
    },
  ]);
  const [selectedTimeUnit, setSelectedTimeUnit] = useState<{ value: string; label: string } | undefined>(timeUnits[3]);

  const [timeIntervals, setTimeIntervals] = useState<TimeIntervalOption[] | undefined>();
  const [selectedTimeInterval, setSelectedTimeInterval] = useState<TimeIntervalOption | undefined>();

  const [priceByDayGraphData, setPriceByDayGraphData] = useState<any[]>([]);

  useEffect(() => {
    let intervals = timeIntervalBuilders[selectedTimeUnit?.value ?? 'month']();

    setTimeIntervals(intervals.intervals);
    setSelectedTimeInterval(intervals.default);
  }, [selectedTimeUnit]);

  useEffect(() => {
    let priceByDay = utilities?.getTotalPriceByDay() ?? {};

    const lineData: {
      x: number;
      y: number;
      split: number;
    }[] = [];

    for (let day in priceByDay) {
      lineData.push({
        y: priceByDay[day].price,
        x: priceByDay[day].date.toDate().getTime(),
        split: priceByDay[day].splitPrice,
      });
    }
    setPriceByDayGraphData(lineData);

    let priceByPaymentMethods = utilities?.getPricesByPaymentMethods() ?? {};
    setPaymentMethodsData(priceByPaymentMethods);
  }, [utilities]);

  useEffect(() => {
    if (utilities == null || selectedTimeInterval == null) return;

    let data =
      utilities?.getTotalPriceByDay({
        start: selectedTimeInterval?.start,
        end: selectedTimeInterval?.end,
      }) ?? {};

    const lineData: {
      x: number;
      y: number;
      split: number;
    }[] = [];

    for (let day in data) {
      lineData.push({
        y: data[day].price,
        x: data[day].date.toDate().getTime(),
        split: data[day].splitPrice,
      });
    }
    setPriceByDayGraphData(lineData);

    let priceByPaymentMethods =
      utilities?.getPricesByPaymentMethods({
        start: selectedTimeInterval?.start,
        end: selectedTimeInterval?.end,
      }) ?? {};
    setPaymentMethodsData(priceByPaymentMethods);
  }, [selectedTimeInterval]);

  useEffect(() => {
    Repository.getMarketplace(props.name).then((marketplace) => {
      setMarketPlace(marketplace);
      const util = new MarketplaceUtilities({
        orders: marketplace.orders,
        products: marketplace.products,
      });
      setUtilities(util);
    });
  }, []);

  function timeUnitChanged(value, { action }) {
    setSelectedTimeUnit(value);
  }

  function timeIntervalChanged(value) {
    setSelectedTimeInterval(value);
  }

  function formatDate(date: number | Date) {
    let d: Date;
    if (date instanceof Date) {
      d = date;
    } else {
      d = new Date();
      d.setTime(date);
    }
    let m = moment(d);
    if (selectedTimeUnit?.value === 'day') {
      return `${m.hour()}:${String(m.minute()).padStart(2, '0')}`;
    } else {
      return `${String(m.date()).padStart(2, '0')}/${String(m.month() + 1).padStart(2, '0')}/${m.year()}`;
    }
  }

  let amountFromPreviousPeriod = 0;
  let amountFromCurrentPeriod = 0;
  let trendPercentage = 0;
  let amountOfOrders = priceByDayGraphData.length;
  let mediumTicket = 0;

  if (selectedTimeInterval != null && utilities != null) {
    let newStart = moment(selectedTimeInterval.start)
      .subtract(moment(selectedTimeInterval.end).diff(selectedTimeInterval.start))
      .toDate();

    let newEnd = moment(selectedTimeInterval.start).toDate();
    let dataFromPeriod = utilities?.getTotalPriceByDay({
      start: newStart,
      end: newEnd,
    });

    for (let dayId in dataFromPeriod) {
      amountFromPreviousPeriod += dataFromPeriod[dayId].price;
    }

    priceByDayGraphData?.forEach((data) => {
      amountFromCurrentPeriod += data.y;
    });

    if (amountFromCurrentPeriod != 0) mediumTicket = amountFromCurrentPeriod / amountOfOrders;

    if (amountFromCurrentPeriod == 0 || amountFromPreviousPeriod == 0) trendPercentage = 1;
    else trendPercentage = amountFromCurrentPeriod / amountFromPreviousPeriod;
  }

  return (
    <FullRowCard>
      <MarketplaceInfoGrid>
        <div>
          <img src={marketPlace?.logo ?? ''} />
        </div>

        <MarketplaceInfoColumn>
          <MarketplaceInfoRow>
            <Label>Receita total (bruta): </Label>
            <Info> {`${CurrencyFormatter.format(utilities?.getReceitaBruta() ?? 0)}`}</Info>
          </MarketplaceInfoRow>

          <MarketplaceInfoRow>
            <Label>Receita total (líquida): </Label>
            <Info> {`${CurrencyFormatter.format(utilities?.getReceitaLiquida() ?? 0)}`}</Info>
          </MarketplaceInfoRow>
        </MarketplaceInfoColumn>

        <MarketplaceInfoColumn>
          <MarketplaceInfoRow>
            <Label>Início da operação:</Label>
            <Info>{DateFormatter.format(marketPlace?.joinedOnDate)}</Info>
          </MarketplaceInfoRow>
          <MarketplaceInfoRow>
            <Label>Plano:</Label>
            <Info>{marketPlace?.planInfo}</Info>
          </MarketplaceInfoRow>
        </MarketplaceInfoColumn>
      </MarketplaceInfoGrid>
      <MarketplaceChartDisplay>
        <ChartFilters>
          <ChartFiltersTitle>Mostrar em intervalos:</ChartFiltersTitle>
          <ChartFilterPickTimeUnit>
            <Select value={selectedTimeUnit} options={timeUnits} onChange={timeUnitChanged}></Select>
          </ChartFilterPickTimeUnit>
          <ChartFilterPickTimeInterval>
            <Select
              options={timeIntervals}
              value={timeIntervals?.filter((v) => v.value === selectedTimeInterval?.value)}
              onChange={timeIntervalChanged}
            ></Select>
          </ChartFilterPickTimeInterval>
        </ChartFilters>
        <MarketResumeContainer>
          <MarketPerformanceResumeCard
            title="Receita Bruta"
            icon={MoneyBagIcon}
            value={(() => {
              let amount = 0;
              priceByDayGraphData?.forEach((data) => {
                amount += data.y;
              });
              return `${CurrencyFormatter.format(amount)}`;
            })()}
          ></MarketPerformanceResumeCard>

          <MarketPerformanceResumeCard
            title="Receita Líquida"
            icon={ShopCartIcon}
            value={(() => {
              let amount = 0;
              priceByDayGraphData?.forEach((data) => {
                amount += data.split;
              });
              return `${CurrencyFormatter.format(amount)}`;
            })()}
          ></MarketPerformanceResumeCard>

          <MarketPerformanceResumeCard
            title="Desempenho"
            icon={trendPercentage == 1 ? TrendEqualIcon : trendPercentage > 1 ? TrendUpIcon : TrendDownIcon}
            color={trendPercentage == 1 ? '#6bbbd2' : trendPercentage > 1 ? '#34be9f' : '#d94343'}
            value={(() => {
              return `${(Math.abs(1 - trendPercentage) * 100).toFixed(2)}%`;
            })()}
          ></MarketPerformanceResumeCard>

          <MarketPerformanceResumeCard
            title="Pedidos feitos"
            icon={ShopCartIcon}
            value={amountOfOrders.toFixed(0)}
          ></MarketPerformanceResumeCard>

          <MarketPerformanceResumeCard
            title="Ticket Médio"
            icon={ShopCartIcon}
            value={`R$ ${mediumTicket.toFixed(2)}`}
          ></MarketPerformanceResumeCard>
        </MarketResumeContainer>
        {marketPlace !== undefined && utilities !== undefined ? (
          <MarketplacePerformanceChart>
            <ResponsiveContainer>
              <ComposedChart data={priceByDayGraphData}>
                <XAxis tickFormatter={formatDate} type="category" angle={-30} dataKey="x" />
                <YAxis dataKey="y" angle={-90} />
                <CartesianGrid stroke="#eee" />
                <Tooltip
                  formatter={(v, a) => [`R$ ${Number(v).toFixed(2)}`, a == 'y' ? 'Pedido' : 'Repassado']}
                  labelFormatter={(value) => {
                    return 'Acumulado do dia';
                  }}
                />
                <Area type="monotone" fill="var(--primary-color-10)" stroke="var(--primary-color)" dataKey="y"></Area>
                <Area
                  type="monotone"
                  fill="var(--primary-color-15)"
                  stroke="var(--primary-color)"
                  dataKey="split"
                ></Area>
              </ComposedChart>
            </ResponsiveContainer>
          </MarketplacePerformanceChart>
        ) : (
          ''
        )}
      </MarketplaceChartDisplay>
      <MarketAndPaymentContainer>
        <MarketRulesView>
          <MarketRulesViewer
            amount={amountFromCurrentPeriod ?? 0}
            marketTax={(() => {
              let totalTax = 100;
              marketPlace?.splitRules.forEach((rule) => {
                totalTax = rule(totalTax).incomeValue;
              });
              return 100 - totalTax;
            })()}
          ></MarketRulesViewer>
        </MarketRulesView>

        <PaymentMethodsView>
          <PaymentMethodsMarketView paymentMethods={paymentMethodsData}></PaymentMethodsMarketView>
        </PaymentMethodsView>
      </MarketAndPaymentContainer>
    </FullRowCard>
  );
}

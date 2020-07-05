import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Line, ComposedChart, XAxis, YAxis, Tooltip, Label, CartesianGrid } from 'recharts';
import Select from 'react-select';
import MoneyBagIcon from '../../../../../assets/img/icons/money.bag.svg';
import ShopCartIcon from '../../../../../assets/img/icons/shop.cart.svg';
import TrendDownIcon from '../../../../../assets/img/icons/trend.down.svg';
import moment from 'moment';

import {
  Container,
  SelectViewRangeContainer,
  MarketResumeContainer,
  MarketplaceChartDisplay,
  MarketplacePerformanceChart,
  ChartFilters,
  ChartFilterPickTimeInterval,
  ChartFilterPickTimeUnit,
  ChartFiltersTitle,
} from './AllChannelsStyles';
import { FullRowCard } from '../../FragmentStyles';
import MarketPerformanceResumeCard from '../pickChannelView/marketPerformanceResumeCard/MarketPerformanceResumeCard';
import { IMarketplaceData, IMarketplaceOrder } from '../../../../../data/DataMock';
import { Marketplaces, Repository } from '../../../../../data/marketplaces/MarketplaceRepository';

import { MarketplaceUtilities } from '../../../../../data/marketplaces/MarketplaceUtilities';
import { TimeIntervalOption } from '../pickChannelView/ChannelCard';
import { timeIntervalBuilders } from '../pickChannelView/timeUtils/TimeUtils';
import { CurrencyFormatter } from '../../../../../data/Intl';

export default function AllChannelsVisualization() {
  const [allMarketplaces, setAllMarketplaces] = useState<{ [name: string]: IMarketplaceData }>({});
  const [allUtilities, setUtilities] = useState<{ [name: string]: MarketplaceUtilities }>({});

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
  const [graphicData, setGraphicData] = useState<any[]>([]);

  function loadTimeIntervalFromBuilder() {
    let intervals = timeIntervalBuilders[selectedTimeUnit?.value ?? 'month']();

    setTimeIntervals(intervals.intervals);
    setSelectedTimeInterval(intervals.default);
  }

  useEffect(() => {
    loadTimeIntervalFromBuilder();
    return;
  }, [selectedTimeUnit]);

  function timeUnitChanged(value, { action }) {
    setSelectedTimeUnit(value);
  }

  function timeIntervalChanged(value) {
    setSelectedTimeInterval(value);
  }

  useEffect(() => {
    let markets: { [name: string]: IMarketplaceData } = {};
    let utilities: { [name: string]: MarketplaceUtilities } = {};

    let marketPromises: Promise<IMarketplaceData>[] = [];

    for (const name in Marketplaces) {
      marketPromises.push(Repository.getMarketplace(name));
    }
    Promise.all(marketPromises).then((allMarkets) => {
      allMarkets.forEach((market) => {
        markets[market.name] = market;
        utilities[market.name] = new MarketplaceUtilities({ products: market.products, orders: market.orders });
      });

      console.log('MARKETS', markets);

      setAllMarketplaces(markets);
      setUtilities(utilities);
    });
    loadTimeIntervalFromBuilder();
  }, []);

  useEffect(() => {
    const allMaximuns: any[] = [];
    for (let name in allUtilities) {
      let data = allUtilities[name].getTotalPriceByDay(
        selectedTimeInterval != null
          ? {
              start: selectedTimeInterval.start,
              end: selectedTimeInterval.end,
            }
          : undefined,
      );

      for (let dayStr in data) {
        allMaximuns.push({
          date: data[dayStr].date.toDate().getTime(),
          amount: data[dayStr].price,
          amount_split: data[dayStr].splitPrice,
          [`${name}_amount`]: data[dayStr].price,
          [`${name}_amount_split`]: data[dayStr].splitPrice,
        });
      }
    }
    setGraphicData(allMaximuns);
  }, [selectedTimeInterval, allMarketplaces, allUtilities]);

  useEffect(() => {
    console.log('GRAPHIC DATA', graphicData);
  }, [graphicData]);

  let amountFromPreviousPeriod = 0;
  let amountFromCurrentPeriod = 0;
  let trendPercentage = 1;

  if (selectedTimeInterval != null && allUtilities != null) {
    let newStart = moment(selectedTimeInterval.start)
      .subtract(moment(selectedTimeInterval.end).diff(selectedTimeInterval.start))
      .toDate();

    let newEnd = moment(selectedTimeInterval.start).toDate();
    for (let name in allUtilities) {
      let dataFromPeriod = allUtilities[name].getTotalPriceByDay({
        start: newStart,
        end: newEnd,
      });

      for (let dayId in dataFromPeriod) {
        amountFromPreviousPeriod += dataFromPeriod[dayId].price;
      }
    }

    graphicData.forEach((data) => {
      amountFromCurrentPeriod += data.amount;
    });

    if (amountFromCurrentPeriod == 0 || amountFromPreviousPeriod == 0) trendPercentage = 1;
    else trendPercentage = amountFromCurrentPeriod / amountFromPreviousPeriod;
  }

  function formatDate(date: number | Date) {
    console.log(date);
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

  return (
    <Container>
      <FullRowCard>
        <SelectViewRangeContainer>
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
                  let totalBrute = 0;
                  graphicData.forEach((d) => {
                    totalBrute += d.amount;
                  });
                  return CurrencyFormatter.format(totalBrute);
                })()}
              ></MarketPerformanceResumeCard>

              <MarketPerformanceResumeCard
                title="Receita Líquida"
                icon={ShopCartIcon}
                value={(() => {
                  let totalLiquid = 0;
                  graphicData.forEach((d) => {
                    totalLiquid += d.amount_split;
                  });
                  return CurrencyFormatter.format(totalLiquid);
                })()}
              ></MarketPerformanceResumeCard>

              <MarketPerformanceResumeCard
                title="Desempenho"
                icon={TrendDownIcon}
                color={trendPercentage == 1 ? '#6bbbd2' : trendPercentage > 1 ? '#34be9f' : '#d94343'}
                value={(() => {
                  return `${(Math.abs(1 - trendPercentage) * 100).toFixed(2)}%`;
                })()}
              ></MarketPerformanceResumeCard>

              <MarketPerformanceResumeCard
                title="Pedidos feitos"
                icon={ShopCartIcon}
                value={'' + graphicData.length}
              ></MarketPerformanceResumeCard>

              <MarketPerformanceResumeCard
                title="Ticket Médio"
                icon={ShopCartIcon}
                value={``}
              ></MarketPerformanceResumeCard>
            </MarketResumeContainer>

            <MarketplacePerformanceChart>
              <ResponsiveContainer>
                <ComposedChart data={graphicData}>
                  <XAxis
                    tickFormatter={formatDate}
                    type="number"
                    domain={['dataMin - 100', 'dataMax + 100']}
                    angle={-30}
                    dataKey="date"
                  />
                  <YAxis dataKey="amount" angle={-90} />
                  <CartesianGrid stroke="#eee" />
                  <Tooltip
                    formatter={(v, a) => [`R$ ${Number(v).toFixed(2)}`, allMarketplaces[a.split('_')[0]].name]}
                    labelFormatter={(value) => {
                      return 'Acumulado do dia';
                    }}
                  />
                  {(() => {
                    let allLines: JSX.Element[] = [];
                    for (let name in allMarketplaces) {
                      allLines.push(
                        <Line
                          className={`line-${name}`}
                          stroke={allMarketplaces[name].color_theme ?? 'black'}
                          color={allMarketplaces[name].color_theme ?? 'black'}
                          dataKey={`${name}_amount`}
                          type="monotone"
                        ></Line>,
                      );
                    }

                    return allLines;
                  })()}
                </ComposedChart>
              </ResponsiveContainer>
            </MarketplacePerformanceChart>
          </MarketplaceChartDisplay>
        </SelectViewRangeContainer>
      </FullRowCard>
    </Container>
  );
}

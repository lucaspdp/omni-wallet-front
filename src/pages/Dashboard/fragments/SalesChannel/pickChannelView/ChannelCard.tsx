import React, { useState, useEffect } from 'react';
/*import {
  LineChart,
  YAxis,
  XAxis,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label as AxisLabel,
} from 'recharts';
<ResponsiveContainer width="100%">
            <LineChart width={600} height={400} data={DataMock.iFood.orders}>
              <Line type="monotone" dataKey="total_price" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="order_date" type="number" tickFormatter={formatOrderDate}>
                <AxisLabel value="Order Date" offset={0} position="insideBottom" />
              </XAxis>
              <Legend />
              <YAxis label="Price, per period" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>*/
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis';

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
} from './ChannelCardStyles';
import { FullRowCard } from '../../FragmentStyles';
import { CurrencyFormatter, DateFormatter } from '../../../../../data/Intl';
import Select from 'react-select';
import { MarketplaceUtilities } from '../../../../../data/marketplaces/MarketplaceUtilities';
import { Repository } from '../../../../../data/marketplaces/MarketplaceRepository';
import { IMarketplaceData } from '../../../../../data/DataMock';
import { SvgIconStyle } from '../../../../../styles/global';

export type ChannelCardProps = {
  name: string;
};

const timeIntervalsKeys = ['day', 'week', 'month', 'year'];

const daysInMonths: any = {
  january: 31,
  february: 28, // Bissexto aaaaahh
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};

const monthsInOrder = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
const now = new Date(Date.now());
const currentMonth: number = now.getMonth();
const currentDay = now.getDate();

const defaultTimeIntervals = {
  day: currentDay,
  month: currentMonth,
  year: now.getFullYear(),
};

function getDefaultValues(unit: string) {
  if (unit === 'day') {
    const days: any[] = [];
    for (let day = 1; day < daysInMonths[monthsInOrder[currentMonth as any] as any]; day++) {
      days.push({ label: day, value: day });
    }
    return days;
  }

  if (unit === 'month') {
    const months: any[] = [];
    monthsInOrder.forEach((m) => {
      months.push({
        label: m,
        value: m,
      });
    });
    return months;
  }

  if (unit === 'year') {
    const years: any[] = [];
    for (let year = now.getFullYear() - 5; year < now.getFullYear() + 10; year++)
      years.push({
        label: year,
        value: year,
      });
    return years;
  }

  return [];
}

function formatOrderDate(tickItem: Date) {
  console.log(tickItem);
  return 'tudu';
}

export default function ChannelCard(props: ChannelCardProps) {
  const [marketPlace, setMarketPlace] = useState<IMarketplaceData | undefined>(undefined);
  const [utilities, setUtilities] = useState<MarketplaceUtilities | undefined>();


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

  const [defaultTimeInterval] = useState({
    value: '',
    label: '',
  });

  const [timeUnits] = useState([
    {
      value: 'day',
      label: 'Dia',
      daysInUnit: (value: string) => 1,
    },
    {
      value: 'week',
      label: 'Semana',
      daysInUnit: (value: string) => 7,
    },
    {
      value: 'month',
      label: 'Mês',
      daysInUnit: (value: string) => (daysInMonths as any)[value] ?? 30,
    },
    {
      value: 'year',
      label: 'Ano',
      daysInUnit: (value: string) => 365,
    },
  ]);

  const [timeInterval, setTimeInterval] = useState<any[]>([]);

  return (
    <FullRowCard>
      <MarketplaceInfoGrid>
        <SvgIconStyle source={marketPlace?.logo ?? ''} color={marketPlace?.color_theme ?? '#303030'} />

        <MarketplaceInfoColumn>
          <MarketplaceInfoRow>
            <Label>Receita total (bruta): </Label>
            <Info> {`R$ ${CurrencyFormatter.format(utilities?.getReceitaBruta() ?? 0)}`}</Info>
          </MarketplaceInfoRow>

          <MarketplaceInfoRow>
            <Label>Receita total (líquida): </Label>
            <Info> {`R$ ${CurrencyFormatter.format(utilities?.getReceitaLiquida() ?? 0)}`}</Info>
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
          <ChartFiltersTitle>Mostrando:</ChartFiltersTitle>
          <ChartFilterPickTimeUnit>
            <Select
              options={timeUnits}
              value={[timeUnits[2]]}
              onChange={(value, changeEvent) => {
                if (changeEvent.action === 'select-option')
                  setTimeInterval(getDefaultValues(((value as any)?.value as string) ?? ''));
              }}
            ></Select>
          </ChartFilterPickTimeUnit>
          <ChartFilterPickTimeInterval>
            <Select
              options={timeInterval}
              value={timeUnits.filter((v) => v.value === defaultTimeInterval.value)}
            ></Select>
          </ChartFilterPickTimeInterval>
        </ChartFilters>
        {marketPlace !== undefined && utilities !== undefined ? (
          <MarketplacePerformanceChart>
            <XYPlot height={300} width={1200} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries
                data={(() => {
                  let allData = utilities!.getTotalPriceByDay();
                  let lineData: {
                    x: string;
                    y: number;
                  }[] = [];
                  for (let day in allData) {
                    lineData.push({ y: allData[day], x: day });
                  }
                  console.log('LINEDATA', lineData);
                  return lineData as any[];
                })()}
              />
            </XYPlot>
          </MarketplacePerformanceChart>
        ) : (
          ''
        )}
      </MarketplaceChartDisplay>
    </FullRowCard>
  );
}

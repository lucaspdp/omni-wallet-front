import React, { useState, useEffect } from 'react';
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
} from './ChannelCardStyles';
import { FullRowCard } from '../../FragmentStyles';
import { CurrencyFormatter, DateFormatter } from '../../../../../data/Intl';
import Select from 'react-select';
import { MarketplaceUtilities } from '../../../../../data/marketplaces/MarketplaceUtilities';
import { Repository } from '../../../../../data/marketplaces/MarketplaceRepository';
import { IMarketplaceData } from '../../../../../data/DataMock';
import { SvgIconStyle } from '../../../../../styles/global';
import moment from 'moment';

export type ChannelCardProps = {
  name: string;
};

export default function ChannelCard(props: ChannelCardProps) {
  const [marketPlace, setMarketPlace] = useState<IMarketplaceData | undefined>(undefined);
  const [utilities, setUtilities] = useState<MarketplaceUtilities | undefined>();
  const [timeUnit, setTimeunit] = useState('month');
  const [timeInterval, setTimeInterval] = useState<any[]>([]);
  const [graphData, setGraphData] = useState<any[]>([]);

  useEffect(() => {}, [timeUnit]);
  useEffect(() => {
    let data = utilities?.getTotalPriceByDay() ?? {};

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
    setGraphData(lineData);
  }, [utilities]);

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
    },
    {
      value: 'week',
      label: 'Semana',
    },
    {
      value: 'month',
      label: 'Mensal',
    },
    {
      value: 'year',
      label: 'Ano',
    },
  ]);

  function formatDate(date: number | Date) {
    console.log('FORMAT DATE ', date);
    let d: Date;
    if (date instanceof Date) {
      d = date;
    } else {
      d = new Date();
      d.setTime(date);
    }
    return `${moment(d).year()}/${String(moment(d).month()+1).padStart(2, '0')}/${moment(d).date()}`;
  }

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
            <Select options={timeUnits}></Select>
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
            <ResponsiveContainer>
              <ComposedChart width={500} height={300} data={graphData}>
                <XAxis
                  tickFormatter={(toFormat) => {
                    console.log(toFormat);
                    return formatDate(toFormat);
                  }}
                  
                  type="category"
                  dataKey="x"
                />
                <YAxis dataKey="y" />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip
                  formatter={(v, a) => [`R$ ${Number(v).toFixed(2)}`, a == 'y' ? 'Pedido' : 'Repassado']}
                  labelFormatter={(value) => {
                    console.log(value);
                    return 'Acumulado do dia';
                  }}
                />
                <Area type="linear" fill="var(--primary-color-25)" stroke="var(--primary-color)" dataKey="y"></Area>
                <Area type="linear" fill="var(--primary-color-50)" stroke="var(--primary-color)" dataKey="split"></Area>
              </ComposedChart>
            </ResponsiveContainer>
          </MarketplacePerformanceChart>
        ) : (
          ''
        )}
      </MarketplaceChartDisplay>
    </FullRowCard>
  );
}

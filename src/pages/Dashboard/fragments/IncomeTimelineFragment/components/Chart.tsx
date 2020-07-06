import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { ComposedChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Bar, Label, Tooltip } from 'recharts';

import {
  Container,
  SelectViewRangeContainer,
  FutureSalesChartDisplay,
  ChartFilters,
  ChartFiltersTitle,
  ChartFilterPickTimeUnit,
  ChartFilterPickTimeInterval,
  ChartTitle,
  FutureBillsChart,
} from './ChartStyle';
import { timeIntervalBuilders } from '../../SalesChannel/pickChannelView/timeUtils/TimeUtils';
import { TimeIntervalOption } from '../../SalesChannel/pickChannelView/ChannelCard';
export default function Chart() {
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
  const [graphicData, setGraphicData] = useState<any[]>([
    {
      week: '1',
      receive: 23230,
      pay: 234234,
    },
    {
      week: '1',
      receive: 14224,
      pay: 20330,
    },

    {
      week: '2',
      pay: 134000,
      receive: 914224,
    },
    {
      week: '2',
      pay: 22980,
      receive: 11224,
    },

    {
      week: '3',
      pay: 13323123,
      receive: 14224,
    },
    {
      week: '3',
      pay: 2292380,
      receive: 98024,
    },

    {
      week: '4',
      pay: 654000,
      receive: 34224,
    },
    {
      week: '4',
      pay: 92980,
      receive: 14224,
    },
  ]);

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

  return (
    <Container>
      <SelectViewRangeContainer>
        <FutureSalesChartDisplay>
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

          <FutureBillsChart>
            <ChartTitle>Volume de receitas x despesas </ChartTitle>
            <ResponsiveContainer>
              <ComposedChart data={graphicData}>
                <CartesianGrid />
                <XAxis dataKey="week" />
                <YAxis />
                <Bar dataKey="receive" fill='#2dbc9c'></Bar>
                <Bar dataKey="pay" fill='#ff8373'></Bar>
              </ComposedChart>
            </ResponsiveContainer>
          </FutureBillsChart>
        </FutureSalesChartDisplay>
      </SelectViewRangeContainer>
    </Container>
  );
}

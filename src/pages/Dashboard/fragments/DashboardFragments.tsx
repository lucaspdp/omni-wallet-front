import React from 'react';
import SaleChannelIcon from '../../../assets/img/icons/sales.svg';
import TimelineIcon from '../../../assets/img/icons/timeline.svg';
import BillsIcon from '../../../assets/img/icons/bill.svg';
import SimulationIcon from '../../../assets/img/icons/plan.ahead.svg';
import RecommendationIcon from '../../../assets/img/icons/recomendation.svg';
import SalesChannelFragment from './SalesChannelFragment';
import IncomeTimelineFragment from './IncomeTimelineFragment';
import SimulationFragment from './SimulationFragment';
import BillsFragment from './BillsFragment';
import RecommendationFragment from './RecommendationFragment';

export const DashboardFragments = asFragment({
  // Sale Channel
  SalesChannel: {
    icon: SaleChannelIcon,
    label: 'Canais de Venda',
    fragment: <SalesChannelFragment></SalesChannelFragment>,
  },
  // Income timeline
  IncomeTimeline: {
    icon: TimelineIcon,
    label: 'Calendário de Recebíveis',
    fragment: <IncomeTimelineFragment></IncomeTimelineFragment>,
  },
  // Bills
  Bills: {
    icon: BillsIcon,
    label: 'Contas a Pagar',
    fragment: <BillsFragment />,
  },
  // Simulate 
  SimulateScenario: {
    icon: SimulationIcon,
    label: 'Simular',
    fragment: <SimulationFragment />,
  },
  //Recommendation
  Recommendations: {
    icon: RecommendationIcon,
    label: 'Recomendações',
    fragment: <RecommendationFragment />,
  },
});

interface DashboardFragmentDefinition {
  icon: string;
  label: string;
  fragment: JSX.Element;
}

function asFragment<
  T extends {
    [fragmentId: string]: DashboardFragmentDefinition;
  }
>(arg: T): T {
  return arg;
}

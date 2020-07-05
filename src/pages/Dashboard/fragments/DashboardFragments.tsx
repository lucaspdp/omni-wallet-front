import React from 'react';
// Icons
import SaleChannelIcon from '../../../assets/img/icons/sales.svg';
import TimelineIcon from '../../../assets/img/icons/calendar.svg';
import BillsIcon from '../../../assets/img/icons/bill.svg';
import SimulationIcon from '../../../assets/img/icons/plan.ahead.svg';
import RecommendationIcon from '../../../assets/img/icons/recomendation.svg';
import ConfigurationIcon from '../../../assets/img/icons/configuration.svg';
import PrivacyIcon from '../../../assets/img/icons/privacy.svg';
// Fragments
import SalesChannelFragment from './SalesChannel/SalesChannelFragment';
import IncomeTimelineFragment from './IncomeTimelineFragment/index';
import SimulationFragment from './SimulationFragment/index';
import BillsFragment from './BillsFragment';
import RecommendationFragment from './RecommendationFragment';
import ConfigurationFragment from './ConfigurationFragment';
import PrivacyFragment from './PrivacyFragment';

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
  // Recommendation
  Recommendations: {
    icon: RecommendationIcon,
    label: 'Recomendações',
    fragment: <RecommendationFragment />,
  },
  // -- Separator
  // Configuration
  Configuration: {
    icon: ConfigurationIcon,
    label: 'Configurações',
    fragment: <ConfigurationFragment />,
  },
  Privacy: {
    icon: PrivacyIcon,
    label: 'Privacidade',
    fragment: <PrivacyFragment />,
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

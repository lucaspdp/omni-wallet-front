import React from 'react';

import { MarketResumeInformation, InformationLogo, InformationTitle, InformationContainer } from './ResumeCardStyles';
import { SvgIconStyle } from '../../../../../../styles/global';
type ResumeCardProps = {
  title: string;
  icon: string;
  value: string;
  color?: string;
};

export default function MarketPerformanceResumeCard(props: ResumeCardProps) {
  return (
    <MarketResumeInformation>
      <InformationLogo color={props.color ?? 'var(--primary-color)'}>
        <SvgIconStyle source={props.icon} size='70%' color={props.color ?? 'var(--primary-color)'}></SvgIconStyle>
      </InformationLogo>
      <InformationTitle>{props.title}</InformationTitle>
      <InformationContainer>{props.value}</InformationContainer>
    </MarketResumeInformation>
  );
}

import React from 'react';
import { Container } from './SalesChannelStyles';
import { FragmentTitle, FragmentHeaderOptions, FragmentHeader } from '../FragmentStyles';

export default function SalesChannelFragment() {
  return (
    <Container>
      <FragmentHeader>
        <FragmentTitle>Canal de Venda</FragmentTitle>
        <FragmentHeaderOptions>Canal de Venda</FragmentHeaderOptions>
      </FragmentHeader>
    </Container>
  );
}

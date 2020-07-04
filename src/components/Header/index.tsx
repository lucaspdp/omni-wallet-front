import React from 'react';
import AppLogo from '../../assets/logo.svg';
import { HeaderContainer, BrandLogo } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <BrandLogo source={AppLogo}></BrandLogo>
    </HeaderContainer>
  );
}

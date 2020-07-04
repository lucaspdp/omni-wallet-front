import React from 'react';
import AppLogo from '../../assets/logo.svg';
import UserHeaderOptionsComponent from './UserHeaderOptions/UserHeaderOptions';
import { HeaderContainer, BrandLogo, BrandName, UserHeaderOptions } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <BrandLogo size={'60%'} color={'var(--primary-color)'} source={AppLogo}></BrandLogo>
      <BrandName>
        Mercado
        <br />
        Integrado
      </BrandName>
      <UserHeaderOptions>
        <UserHeaderOptionsComponent />
      </UserHeaderOptions>
    </HeaderContainer>
  );
}

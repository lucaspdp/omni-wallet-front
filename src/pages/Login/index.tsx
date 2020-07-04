import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';

import { 
  Content, 
  Left, 
  Right, 
  Logo, 
  BrandName, 
  Title, 
  Welcome, 
  FormLogin,
  FormInput,
  RememberMe,
  FormText,
  TermsOfUse,
  FormButton,
  FormDiv,
  FormLink
} from './styles';

import LogoImg from '../../assets/logo.svg';

export default function Login() {

  const history = useHistory();

  function handleSubmit(e : FormEvent){
    e.preventDefault();

    history.push('/dashboard');
  }

  return (
    <Content>
      <Left>
        <></>
      </Left>
      <Right>
        <Title>
          <Logo src={LogoImg} alt="Mercado Integrado"/>
          <BrandName>
            mercado<br></br>integrado
          </BrandName>
        </Title>

        <Welcome>Welcome back! Please login to your account.</Welcome>

        <FormLogin onSubmit={e=> handleSubmit(e)}>
          <FormInput type="text" placeholder="Username"/>
          <FormInput type="password" placeholder="Password"/>

          <FormDiv>
            <div>
              <RememberMe type="checkbox" />
              <FormText>Remember Me</FormText>
            </div>
            <FormLink to="/">Forgot Password</FormLink>
          </FormDiv>
          <FormDiv>
            <FormButton isPrimaryColor={true} type="submit">Login</FormButton>
            <FormButton type="button">Sign Up</FormButton>
          </FormDiv>
        </FormLogin>
        <TermsOfUse>Terms of use. Privacy policy</TermsOfUse>
      </Right>
    </Content>
  );
}

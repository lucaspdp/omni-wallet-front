import React, { FormEvent } from 'react';

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
  FormLink,
} from './styles';

import LogoImg from '../../assets/logo.svg';

import Graph from '../../assets/signin-graph.svg';

export default function Login() {
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    history.push('/dashboard');
  }

  return (
    <Content>
      <Left>
        <h2>Revoluncionando a expansão omnichannel</h2>
        <img src={Graph} alt="BackGraph" />
      </Left>
      <Right>
        <Title>
          <Logo src={LogoImg} alt="Mercado Integrado" />
          <BrandName>
            mercado<br></br>integrado
          </BrandName>
        </Title>

        <Welcome>Bem-vindo novamente! Por favor faça login.</Welcome>

        <FormLogin onSubmit={(e) => handleSubmit(e)}>
          <FormInput type="text" placeholder="Usuário" />
          <FormInput type="password" placeholder="Senha" />

          <FormDiv>
            <div>
              <RememberMe type="checkbox" />
              <FormText>Lembrar-me</FormText>
            </div>
            <FormLink to="/">Esqueci a senha</FormLink>
          </FormDiv>
          <FormDiv>
            <FormButton isPrimaryColor={true} type="submit">
              Entrar
            </FormButton>
            <FormButton type="button">Registrar-se</FormButton>
          </FormDiv>
        </FormLogin>
        <TermsOfUse>Termos de uso. Política de privacidade</TermsOfUse>
      </Right>
    </Content>
  );
}

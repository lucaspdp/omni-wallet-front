import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(218deg, #242348, #5a55aa);

  @media only screen and (max-width: 750px){
    width: 100%;
  }
`;
export const Right = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 750px){
    width: 80%;
    height: 90%;

    position: absolute;
    top: 5%;
    left: 10%;
    overflow-y: scroll;

    ::-webkit-scrollbar{
      width: 0px;
    }

    border-radius: 10px;
  }
`;
export const Logo = styled.img` 

  margin-right: 20px;

`;

export const BrandName = styled.h1`
  
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  font-weight: 600;

`;

export const Title = styled.div`

  display: flex;
  align-items: center;
  margin-top: 130px;
  @media only screen and (max-width: 750px){
  
    margin-top: 50px;

  }

`;

export const Welcome = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #4D4F5C;
  opacity: 0.5; 
  margin: 40px 0px;
  text-align: center;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media only screen and (max-width: 750px){
    width: 80%;
    max-width: 300px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  margin-top: 20px;

  justify-content: space-between;
  align-items: center;

  div{
    height: 18px;
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 750px){
    flex-direction: column;
  }
`;
export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  color: var(--font-primary);

  border-bottom: 2px solid #E9E9F0;
  transition: border-bottom-color 0.2s;
  background: transparent;

  &::placeholder{
    font-size: 15px;
    color: var(--font-primary);
    margin-bottom: 2px;
    transition: opacity 0.2s;
  }
  &:focus{
    outline: none;
    border-bottom-color: var(--primary-color);
    &::placeholder{
      color: var(--font-primary);
      opacity: 0.95;
    }
  }

  &+input{
    margin-top: 30px;
  }

`;
export const RememberMe = styled.input`
  margin-right: 10px;
`;
export const FormText = styled.span`
  font-size: 15px;
`;
export const FormLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;

  border-bottom: 1px solid transparent;

  transition: border-bottom-color 0.2s;

  &:visited{
    color: var(--font-primary);
  }

  &:hover{
    border-bottom-color: var(--primary-color);
  }
  @media only screen and (max-width: 750px){
    margin-top: 10px;
  }
`;
export const TermsOfUse = styled.span`

  justify-self: flex-end;

`;

type FormButtonType = {
  isPrimaryColor ? : boolean;
}

export const FormButton = styled.button<FormButtonType>`
  background-color: ${props => props.isPrimaryColor ? 'var(--primary-color)': '#fff'};
  border: 1px solid;
  border-color: ${props => props.isPrimaryColor ? 'var(--primary-color)': 'var(--font-primary)'};
  color: ${props => props.isPrimaryColor ? '#fff': 'var(--font-primary)'};

  height: 50px;
  width: 45%;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  transition: filter 0.2s, border-color 0.2s, color 0.2s;

  &:hover{
    ${props => props.isPrimaryColor ? `
      filter: brightness(105%);
    `: `
      border-color: #888;
      color: #888;
    `};
  }
  @media only screen and (max-width: 750px){
    height: 35px;
    width: 100%;
    font-size: 16px;

    & + &{
      margin-top: 5px;
    }
  }
`;
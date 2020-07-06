import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 90vh;
  background: #fff;
  flex-direction: column;

  overflow-y: scroll;
`;
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;

  span.type{
    font-weight: 600;
    font-size: 14;
    margin-bottom: 10px;
    .detail{
      font-weight: 400;
    }
  }

  div.paymentMethods{
    display: flex;
    justify-content: space-between;
    width: 100%;

    .paymentCard{
      display: flex;
      flex-direction: column;
      width: 27%;
      height: 350px;
      min-width: 300px;
      box-shadow: 0px 0px 10px #00000047;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: border-color 0.2s;

      &:hover{
        border-color: var(--primary-color);
      }

      justify-content: center;
      padding: 0 20px;


      img{
        margin: 0 auto;
        width: 120px;
        height: 60px;
        object-fit: scale-down;
        margin-bottom: 20px;
        margin-top: 10px;
      }

      span.sub{
        font-weight: 800;
        font-size: 16px;
        margin-top: 10px;

        .desc{
          margin-left: 5px;
          font-weight: 200;
        }
      }

      .now{
        margin-top: 10px;
        margin: 0 auto;
        color: transparent;
        margin-top: 30px;

        &.active{
          color: #656565;
        }
      }

      button{
        margin: 0 auto;
        background: transparent;
        cursor: pointer;
        color: var(--primary-color);
        border: 1px solid transparent;
        transition: border-bottom-color 0.2s;
        font-size: 14px;
        margin-top: auto;
        margin-bottom: 30px;
        width: 80px;

        &:hover{
          border-bottom-color: var(--primary-color);
        }
      }
    }
  }
`;

export const CompareButton = styled.button`

  background: var(--primary-color);
  border-radius: 29px;
  width: 180px;
  height: 40px;
  cursor: pointer;

  margin: 30px auto;

  color: white;
  font-weight: bolder;
  font-size: 16px;

  transition: transform 0.2s;

  &:hover{
    transform: scale(1.05);
  }

`;

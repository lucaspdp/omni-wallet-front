import styled from 'styled-components';

const columns = 7;
const rows = 5;


export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  .daysOfWeek{
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    background: #E6E6E6;
    border: #EAF0F4 1px solid;

    span{
      width: 100%;
      text-align: center;
      font-size: 15px;
      color: #8A8A8A;
    }
  }

  ul{
    display: grid;
    grid-template-columns: ${`repeat(${columns}, 1fr)`};
    grid-template-rows: ${`repeat(${rows}, 1fr)`};

    list-style: none;

    li{
      height: 90px;
      position: relative;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #EAF0F4;
      display: flex;
      align-items: center;

      .day{
        position: absolute;
        color: #43425D;
        top: 5px;
        right: 5px;
      }

      .other{
        opacity: 0.3;
      }

      .schedule{
        width: 100%;
        height: 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          color: #fff;
          font-weight: 200;
          font-size: 12px;
        }
      }

      .pgFornecedor{
        background: #FF8373;
      }
      .pgFuncionarios{
        background: #6BBBD2;
      }
      .antecipacao{
        background: #F5B41A;
      }
      .repasse{
        background: #B571F9;
      }
    }
  }

`;

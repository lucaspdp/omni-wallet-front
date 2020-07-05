import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;
export const DateBar = styled.div`
  display: flex;
  background: #fff;
  min-height: 30px;
  height: 8%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  --box-radius: 5px;
  
  .left{
    display: flex;
    margin-left: 10px;
    height: 90%;
    align-items: center;
  }
  .title{
    color: #777777;
  }
  ul{
    display: flex;
    list-style: none;
    height: 80%;
    margin-left: 15px;

    li{
      height: 100%;
      width: 80px;

      border: 1px solid #D7DAE2;
      transition: background-color 0.2s;

      &:first-child{
        border-top-left-radius: var(--box-radius);
        border-bottom-left-radius: var(--box-radius);
      }
      &:last-child{
        border-top-right-radius: var(--box-radius);
        border-bottom-right-radius: var(--box-radius);
      }

      &:hover{
        background: #f2f0ff;
      }
    }
  }

  .month{
    color: #4D4F5C;
    font-weight: 600;
    font-size: 25px;
  }

  .right{
    display: flex;
    height: 90%;
    align-items: center;
  }
`;

type DateButtonType = {
  compare ? : string,
  reference ? : string,
}

export const Button = styled.button<DateButtonType>`

  height: 100%;
  width: 100%;
  background: transparent;
  color: #4D4F5C;

  cursor: pointer;
  transition: color 0.2s;
  ${props => 
      props.compare && props.compare === props.reference && `
        color: var(--primary-color);
      `
  };

`;
export const Icoming = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;

  ul{
    display: flex;
    height: 100%;
    width: 100%;
    list-style: none;
    justify-content: space-between;
    li{
      background: #FFFFFF;
      height: 100%;
      width: 32.5%;
      max-width: 310px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 6px #0000000A;

      .up{
        display: flex;
        width: 90%;
        span{
          color: #565656;
          font-weight: 800;
          font-size: 18px;
        }
      }

      .down{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        span{
          color: #2DBC9C;
          font-weight: bolder;
          font-size: 22px;
        }
      }

    }
  }
`;
export const IncomingCalendar = styled.div`
  
`;
export const Top = styled.ul`
  
`;
export const Legenda = styled.ul`
  
`;
export const Despesas = styled.ul`
  
`;
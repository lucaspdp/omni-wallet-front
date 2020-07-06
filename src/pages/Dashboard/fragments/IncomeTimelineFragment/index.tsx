import React, { useState, useEffect } from 'react';
import { BarChart, Bar } from 'recharts';
import faker from 'faker';
import AntecipacaoSVG from '../../../../assets/antecipacao.svg';

import {
  Container,
  DateBar,
  Icoming,
  IncomingCalendar,
  Legenda,
  Despesas,
  Top,
  Button,
  Antecipacao
} from './styles';
import Calendar from './components/Calendar';
import Chart from './components/Chart';

export default function IncomeTimelineFragment() {

  type IncomingType = {
    monthNumber : number,
    month : string,
    cash : number
  }

  type DayGainType = {
    day : number,
    gain : number,
    type : string,
    nome ? : string,
    setor ? : string,
    qtd ? : number,
    prazo ? : number,
    prazoFunc ? : number;
    formaPg ? : string,
    aPagar ? : number,
    qtdFunc ? : number,
    valLiquido ? : number,
    operadora ? : string,
    antecipacao ? : string,
    valBruto ? : number,
    taxa ? : number,
    periodo ? : string,
    regraRepasse ? : string
  }

  const [date, setDate] = useState(new Date())
  const [month, setMonth] = useState('atual');
  const [range, setRange] = useState('Mês');
  const [incoming, setIncoming] = useState<IncomingType[]>([]);
  const [available, setAvailable] = useState<IncomingType[]>([]);
  const [bills, setBills] = useState<IncomingType[]>([]);
  const [incomingMoney, setIncomingMoney] = useState(0);
  const [availableMoney, setAvailableMoney] = useState(0);
  const [billsMoney, setBillsMoney] = useState(0);
  const [gains, setGains] = useState<DayGainType[]>([]);

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  useEffect(()=>{
    setIncoming([]);
    setAvailable([]);
    setBills([]);

    setIncomingMoney(faker.random.number({min: 1000, max: 100000}));
    setAvailableMoney(faker.random.number({min: 1000, max: 100000}));
    setBillsMoney(faker.random.number({min: 1000, max: 100000}));
    for(var i=0; i<13; i++){
      setIncoming(arr => [...arr , {
        monthNumber: i + 1,
        month: months[i],
        cash: faker.random.number(30000)
      }]);
    }
    for(var i=0; i<13; i++){
      setAvailable(arr => [...arr , {
        monthNumber: i + 1,
        month: months[i],
        cash: faker.random.number(30000)
      }]);
    }
    for(var i=0; i<13; i++){
      setBills(arr => [...arr , {
        monthNumber: i + 1,
        month: months[i],
        cash: faker.random.number(30000)
      }]);
    }
  }, [month])

  useEffect(()=>{
    generateGains();
  }, [incomingMoney, availableMoney, billsMoney])

  function generateGains(){
    const daysInMonth = 30;
    var daysGain : DayGainType[] = [];
    var totalGain = availableMoney + incomingMoney;
    for(var i = 0; i < daysInMonth; i++){
      if(totalGain <= 0) break;
      if(Math.random() > 0.5){
        const gain = faker.random.number({min: 5000, max: 15000})
        const typeSort = Math.random();
        var type = "";
        if(typeSort <= 0.25) type = "pgFornecedor";
        else if(typeSort <= 0.5) type = "pgFuncionarios";
        else if(typeSort <= 0.75) type = "antecipacao";
        else if(typeSort <= 0.9) type = "repasse";
        else type = type = "fisica";
        //||
        const simValue = faker.random.number(25000);
        if(totalGain > gain){
          daysGain.push({
            day: i+1,
            gain,
            type: type,
            nome: type === 'pgFornecedor' ? 'Swift Figorífico' : undefined,
            setor: type === 'pgFornecedor' ? 'Carnes e Frigorificos' : undefined,
            qtd: type === 'pgFornecedor'  ? faker.random.number(900) : undefined,
            prazo: type === 'pgFornecedor' ? faker.random.number(60) : undefined,
            formaPg: 'Transferência bancária',
            aPagar: simValue,
            prazoFunc: 5,
            qtdFunc: type === 'pgFuncionarios'  ? faker.random.number(100) : undefined,
            antecipacao: type === 'antecipacao' ? '01/06 a 15/06' : undefined,
            operadora: type === 'antecipacao' ? 'Cielo Livre' : undefined,
            valBruto: simValue / 100 * 95,
            taxa: type === 'antecipacao' ? 6 : undefined,
            periodo: type === 'repasse' ? '15/06 a 30/06' : undefined,
            regraRepasse: type === 'repasse' ? '31 dias após as vendas' : undefined,
          })
          totalGain -= gain;
        }
      }
    }
    setGains(daysGain);
  }

  function handleMonthSelect(val : string){
    setMonth(val);
  }
  function handleRangeSelect(val : string){
    setRange(val);
  }

  function moneyFormat(val : number){
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <Container>
      <DateBar>
        <div className="left">
          <span className="title">
            Navegação:
          </span>
          <ul>
            <li>
              <Button 
              compare={month} 
              reference={'atual'} 
              type="button"
              onClick={()=>handleMonthSelect('atual')}
              >
                Atual
              </Button>
            </li>
            <li>
              <Button 
              compare={month} 
              reference={'anterior'} 
              type="button"
              onClick={()=>handleMonthSelect('anterior')}
              >
                Anterior
              </Button>
            </li>
            <li>
              <Button 
              compare={month} 
              reference={'proximo'} 
              type="button"
              onClick={()=>handleMonthSelect('proximo')}
              >
                Proximo
              </Button>
            </li>
          </ul>
        </div>
        <span className="month">Julho de 2020</span>
        <div className="right">
          <span className="title">
            Visualizar por:
          </span>
          <ul>
            <li>
              <Button 
              compare={range} 
              reference={'Mês'} 
              type="button"
              onClick={()=>handleRangeSelect('Mês')}
              >
                Mês
              </Button>
            </li>
            <li>
              <Button 
              compare={range} 
              reference={'Semana'} 
              type="button"
              onClick={()=>handleRangeSelect('Semana')}
              >
                Semana
              </Button>
            </li>
            <li>
              <Button 
              compare={range} 
              reference={'Dia'} 
              type="button"
              onClick={()=>handleRangeSelect('Dia')}
              >
                Dia
              </Button>
            </li>
          </ul>
        </div>
      </DateBar>
      <Icoming>
        <ul>
          <li>
            <div className="up">
              <span>Valor de repasses a receber:</span>
            </div>
            <div className="down">
              <span>
                {moneyFormat(incomingMoney)}
              </span>
              <BarChart width={100} height={40} data={incoming}>
                <Bar dataKey="cash" fill={"#55D8FE"}/>
              </BarChart>
            </div>
          </li>

          <li>
            <div className="up">
              <span>Receita em caixa:</span>
            </div>
            <div className="down">
              <span>
                {moneyFormat(availableMoney)}
              </span>
              <BarChart width={100} height={40} data={available}>
                <Bar dataKey="cash" fill={"#A3A0FB"}/>
              </BarChart>
            </div>
          </li>

          <li>
            <div className="up">
              <span>Valor de despesas a pagar:</span>
            </div>
            <div className="down">
              <span>
                {moneyFormat(billsMoney)}
              </span>
              <BarChart width={100} height={40} data={bills}>
                <Bar dataKey="cash" fill={"#5EE2A0"}/>
              </BarChart>
            </div>
          </li>
        </ul>
      </Icoming>
      <IncomingCalendar>
        <Top>
          <Legenda>
            <span className="title">Repasses:</span>
            <div className="ifood">
              <div className="dot"></div>
              <span>Mkt Place: iFood</span>
            </div>
            <div className="b2w">
              <div className="dot"></div>
              <span>Loja online</span>
            </div>
            <div className="fisica">
              <div className="dot"></div>
              <span>Loja física</span>
            </div>
            <div className="antecipacao">
              <Antecipacao src={AntecipacaoSVG} alt="Antecipacao" />
              <span>Antecipação</span>
            </div>
          </Legenda>
          <Despesas>
            <span className="title">Despesas:</span>
            <div className="func">
              <div className="dot"></div>
              <span>Funcionários</span>
            </div>
            <div className="other">
              <div className="dot"></div>
              <span>Outros</span>
            </div>
          </Despesas>
        </Top>
        <Calendar gains={gains}/>
      </IncomingCalendar>
     <Chart></Chart>

    </Container>
  );
}
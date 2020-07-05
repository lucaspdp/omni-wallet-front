import React from 'react';

import { Container } from './CalendarStyle';

type PropsTypes = {
  gains : Array<any>,
  days ? : number,
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

export default function Calendar(props : PropsTypes) {
  console.log(props);

  type DaysArrayType = {
    day : number,
    month : string
  }

  var maxDays = 35;
  var daysInMonth = props.days ? props.days : 30;
  var daysArray : DaysArrayType[] = [];

  for(var i=1; i<=daysInMonth; i++){
    daysArray.push({
      month: "this",
      day: i
    });
  }

  for(var i=1; i<= maxDays-daysInMonth; i++){
    daysArray.push({
      month: "next",
      day: i
    });
  }

  function moneyFormat(val : number){
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function generateGain(gain : DayGainType){
    return(
      <div className={`schedule ${gain.type}`}>
        <span>{moneyFormat(gain.gain)}</span>
      </div>
    )
  }

  return (
    <Container>
      <div className="daysOfWeek">
        <span>DOM</span>
        <span>SEG</span>
        <span>TER</span>
        <span>QUA</span>
        <span>QUI</span>
        <span>SEX</span>
        <span>SAB</span>
      </div>
      <ul>
        {daysArray.map(day=>(
          <li key={day.month + day.day}>
            <span className={`day ${day.month !='this' && 'other'}`}>{day.day}</span>
            {props.gains.map(gain=>{
              if(gain.day == day.day && day.month == 'this'){
                return generateGain(gain)
              }
            })}
          </li>
        ))}
      </ul>
    </Container>
  )
}

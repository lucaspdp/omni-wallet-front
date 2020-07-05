import moment from 'moment';
import { TimeIntervalOption } from '../ChannelCard';

moment.updateLocale('pt-br', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Bovembro',
    'Dezembro',
  ],
});

export const timeIntervalBuilders: any = {
  month: () => {
    let intervals: TimeIntervalOption[] = [];
    let defaultVal!: TimeIntervalOption;

    let now = moment();

    for (let a = 0; a < 14; a++) {
      let start = moment().subtract(7, 'month');
      let mon = start.add(a, 'month');

      let startInt = mon.set('date', 1).toDate();
      let endInt = mon.set('date', mon.daysInMonth()).toDate();

      let prop = {
        value: mon.toISOString(),
        label: `${mon.locale('pt-br').format('MMMM')} de ${mon.years()}`,
        start: startInt,
        end: endInt,
      };

      if (now.isBetween(startInt, endInt)) {
        defaultVal = prop;
      }
      intervals.push(prop);
    }

    return {
      intervals,
      default: defaultVal,
    };
  },
  day: () => {
    let intervals: TimeIntervalOption[] = [];
    let defaultVal!: TimeIntervalOption;

    let now = moment();

    for (let a = 0; a < 24; a++) {
      let multiplier = 24;

      let start = moment().subtract(3, 'day');

      let startInt = start.clone().add(a * multiplier, 'hours').toDate();
      let endInt = start.clone().add((a+1) * multiplier, 'hours').toDate();

      let prop = {
        value: startInt.toISOString(),
        label: `${String(startInt.getHours()).padStart(2, '0')}:00 às ${String(endInt.getHours()).padStart(
          2,
          '0',
        )}:00 do dia ${String(endInt.getDate()).padStart(2, '0')}`,
        start: startInt,
        end: endInt,
      };

      if (now.isBetween(prop.start, prop.end)) {
        defaultVal = prop;
      }
      intervals.push(prop);
    }

    return {
      intervals,
      default: defaultVal,
    };
  },
  week: () => {
    return {
      default: '',
      intervals: [],
    };
  },
  year: () => {
    let intervals: TimeIntervalOption[] = [];
    let defaultVal!: TimeIntervalOption;

    let now = moment();

    for (let a = 0; a < 4; a++) {
      let start = moment().subtract(2, 'years');
      let mon = start.add(a, 'years');

      let startInt = mon.set('month', 1).set('date', 1).toDate();
      let endInt = mon.set('month', 11).set('date', 31).toDate();

      let prop = {
        value: mon.toISOString(),
        label: `ano ${mon.years()}`,
        start: startInt,
        end: endInt,
      };

      if (now.isBetween(startInt, endInt)) {
        defaultVal = prop;
      }
      intervals.push(prop);
    }

    return {
      intervals,
      default: defaultVal,
    };
  },
};

interface IntlFormatters {
  currency : Intl.NumberFormat;
  date : Intl.DateTimeFormat;
}

const formatterCache : {
  [name : string] : IntlFormatters
} = {};

export function getFormatter(name : string) : IntlFormatters {
  return {
    currency : Intl.NumberFormat('pt-br', {
      style : 'currency'
    }),
    date : Intl.DateTimeFormat('pt-br', {
    })
  }
}

export const CurrencyFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export const DateFormatter = new Intl.DateTimeFormat('pt-br', {
  
});
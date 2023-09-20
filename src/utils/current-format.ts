const currencyFormat = (value: number | bigint) => {
  if (typeof value !== 'number') return '';

  return new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(value);
};

export default currencyFormat;
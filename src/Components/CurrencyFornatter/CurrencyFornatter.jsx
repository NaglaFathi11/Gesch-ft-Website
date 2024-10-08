function CurrencyFormatter() {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    currencyDisplay: "symbol",
  });

  const formatCurrency = (number) => {
    return currencyFormatter.format(number);
  };

  return formatCurrency;
}

export default CurrencyFormatter;

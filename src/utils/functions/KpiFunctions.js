export function ConversionRate(interaction, conversion) {
  return `${(conversion / interaction) * 100}%`;
}

export function getYtdValue(data) {
  var totalValue = 0;
  data.forEach((element) => {
    totalValue = totalValue + element.ytd;
  });

  return totalValue;
}

export function formatMoneyValue(total, currency) {
  if (currency == null || currency == "us") {
    let totalWithCommas = total
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${totalWithCommas}`;
  }
}

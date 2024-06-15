export const currencyFormatter = (value) => {
  const formatter = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formatter.format(value);
};

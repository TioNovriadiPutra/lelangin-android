export const uriToBlob = async (value: string): Promise<Blob> => {
  const response = await fetch(value);

  const blob = response.blob();

  return blob;
};

export const monyConverter = (value: number): string => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
};

export const moneyToNumberConverter = (value: string): number => {
  const numberVal = value.substring(2).replace(".", "");

  return parseInt(numberVal);
};

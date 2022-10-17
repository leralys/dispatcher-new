export const dateToISOFormat = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

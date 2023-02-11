// Format number with separator
export const formatNumber = (number: number | string, separator = ".") => {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

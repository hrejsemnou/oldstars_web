export const parseDate = (date) => {
  const dateParts = date.split('.');
  const dateObject = new Date(new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]));
  return dateObject;
}

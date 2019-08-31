export default date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(n => (n < 10 ? `0${n}` : n)).join("-");
};

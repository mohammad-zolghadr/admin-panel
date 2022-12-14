const randomNumber = () => {
  return Math.floor(Math.random() * 100000 + 1);
};
const getTodayDate = () => {
  let date = new Date();
  date = `${new Date().toLocaleDateString(
    "fa-IR-u-nu-latn"
  )} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return date;
};

export { randomNumber, getTodayDate };

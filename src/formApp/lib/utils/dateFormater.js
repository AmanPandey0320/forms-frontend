/**
 * @description returns formated date
 * @param {*} str
 * @returns
 */
export const formatDate = (str) => {
  if (Boolean(str) === false) {
    str = Date.now();
  }
  const date = new Date(str);
  const day = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  let dd = date.getHours();
  let ap = "AM";
  if (dd > 12) {
    ap = "PM";
    dd = dd - 12;
  }
  const time = `${dd}:${date.getMinutes()}:${date.getSeconds()} ${ap}`;
  const fullDate = `on ${day} at ${time}`;
  return { fullDate, day, time };
};

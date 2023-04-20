export const getTodayNumber = (): number => {
  let day = new Date();
  return day.getDay();
};

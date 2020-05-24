const MILLISECONDS = 1000;
const MINUTES = 60;
const HOURS = 60;

const formatDateToHours = (date) =>
  Math.round((new Date().getTime() - new Date(date).getTime()) / (MILLISECONDS * MINUTES * HOURS));

export { formatDateToHours };

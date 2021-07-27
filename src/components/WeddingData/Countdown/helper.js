export const  minuteSeconds = 60;
export const  hourSeconds = 3600;
export const  daySeconds = 86400;

export const  getTimeSeconds = (time) => (minuteSeconds - time) | 0;
export const  getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
export const  getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
export const  getTimeDays = (time) => (time / daySeconds) | 0;
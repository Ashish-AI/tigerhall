export const formatTimeFromMinutes = (minutes: number): string => {
  const totalSeconds = minutes * 60;
  const hours = Math.floor(totalSeconds / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const hoursStr = String(hours).padStart(2, "0");
  const minutesStr = String(remainingMinutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  } else if (remainingMinutes > 0) {
    return `${minutesStr}:${secondsStr}`;
  } else {
    return `${secondsStr}`;
  }
};

export const getCompletedPercentage = (
  timeSpent: number,
  totalLength: number
) => {
  const percentage = Math.floor((timeSpent / totalLength) * 100);
  return percentage;
};

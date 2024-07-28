export const formatTimeFromMinutes = (minutes: number): string => {
  const totalSeconds = minutes * 60;
  const hours = Math.floor(totalSeconds / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const hoursStr = String(hours).padStart(2, "0");
  const minutesStr = String(remainingMinutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  if (hours > 0) {
    // Format as hh:mm:ss or hh:mm if seconds are zero
    if (remainingMinutes === 0 && seconds === 0) {
      return `${hours}h`;
    }
    return `${hoursStr}h:${minutesStr}m${seconds > 0 ? `:${secondsStr}s` : ""}`;
  } else if (remainingMinutes > 0) {
    // Format as mm:ss or mm if seconds are zero
    if (seconds === 0) {
      return `${minutesStr}m`;
    }
    return `${minutesStr}:${secondsStr}`;
  } else {
    // Format as ss
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

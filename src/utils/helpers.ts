/**
 * Formats a duration from minutes into a human-readable string.
 * The format depends on the duration:
 * - If hours are present, format as "hh:mm:ss", "hh:mm", or "hh" if minutes and seconds are zero.
 * - If only minutes are present, format as "mm:ss" or "mm" if seconds are zero.
 * - If only seconds are present, format as "ss".
 *
 * @param minutes - The duration in minutes to be formatted.
 * @returns A string representing the formatted duration.
 */
export const formatTimeFromMinutes = (minutes: number): string => {
  // Convert minutes to total seconds
  const totalSeconds = minutes * 60;

  // Calculate hours, remaining minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  // Format hours, minutes, and seconds to two digits if necessary
  const hoursStr = String(hours).padStart(2, "0");
  const minutesStr = String(remainingMinutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  if (hours > 0) {
    // If hours are present
    if (remainingMinutes === 0 && seconds === 0) {
      // If minutes and seconds are zero, return just the hours
      return `${hours}h`;
    }
    // Format as "hh:mm:ss" or "hh:mm" if seconds are zero
    return `${hoursStr}h:${minutesStr}m${seconds > 0 ? `:${secondsStr}s` : ""}`;
  } else if (remainingMinutes > 0) {
    // If only minutes are present
    if (seconds === 0) {
      // If seconds are zero, return just the minutes
      return `${minutesStr}m`;
    }
    // Format as "mm:ss"
    return `${minutesStr}:${secondsStr}`;
  } else {
    // If only seconds are present
    return `${secondsStr}`;
  }
};

/**
 * Calculates the percentage of time spent relative to the total length.
 *
 * @param timeSpent - The amount of time already spent.
 * @param totalLength - The total duration to compare against.
 * @returns The percentage of time spent, rounded down to the nearest integer.
 */
export const getCompletedPercentage = (
  timeSpent: number,
  totalLength: number
) => {
  // Calculate the percentage of time spent
  const percentage = Math.floor((timeSpent / totalLength) * 100);
  return percentage;
};

/**
 * Generates a resized image URL.
 *
 * @param {string} originalUrl - The original image URL.
 * @param {number} width - The desired width of the resized image.
 * @param {number} height - The desired height of the resized image.
 * @returns {string} - The resized image URL.
 */
export const getResizedImageUrl = (
  originalUrl: string,
  width: number,
  height: number
): string => {
  // Parse the URL to separate the hostname and path
  const url = new URL(originalUrl);

  // Insert '/resize/<width>x<height>' after the hostname
  const resizedPath = `/resize/${width}x${height}`;

  // Rebuild the URL with the resized path
  const resizedUrl = `${url.protocol}//${url.hostname}${resizedPath}${url.pathname}${url.search}`;

  return resizedUrl;
};

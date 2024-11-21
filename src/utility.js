export const convertBytesToMB = (bytes) => {
  const mb = bytes / (1024 * 1024); // Convert bytes to megabytes
  return mb.toFixed(2) + " MB"; // Return the value with 2 decimal places
};

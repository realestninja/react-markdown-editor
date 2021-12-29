export const createTimestampedFilename = () => {
  const dateObject = new Date();
  const dateFragments = dateObject.toISOString().split("T");
  const date = dateFragments[0];
  const time = dateFragments[1].split(".")[0].replace(/:/g, "-");
  return `${date}_${time}`;
};

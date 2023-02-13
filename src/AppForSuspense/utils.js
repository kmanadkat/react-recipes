const defaultDuration = 500;

export const simulateNetwork = async (value) => {
  await sleep(2000);
  return value;
};

export const sleep = (duration = defaultDuration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
};
export const randomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

export const equal = (a: number, b: number) => Math.abs(a - b) < 0.1;

/** BPM stands for beat per minute */
export const calcIntervalByBPM = (bpm: number) => {
  if (bpm === 0) return 0;
  return Math.floor(((1000 * 60) / bpm));
};

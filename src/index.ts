import { getSuffix } from './suffix';

const ordinal = (num: number, suffixOnly = false): string => {
  const suffix = getSuffix(num);

  if (!suffixOnly) {
    return `${num}'${suffix}`;
  }

  return suffix;
};

export { ordinal };

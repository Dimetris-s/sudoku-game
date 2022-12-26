import { randomInt } from '../randomInt/randomInt';

export const getRandomArrayElement = <T extends any = any>(arr: T[] = []): T => {
  return arr[randomInt(0, arr.length - 1)];
};

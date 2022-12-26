import { randomInt } from '../randomInt/randomInt';

export const pullRandomArrayElement = <T>(array: T[]):T => {
  const indexOfRandomElement = randomInt(0, array.length - 1)
  return array.splice(indexOfRandomElement, 1)[0];
}

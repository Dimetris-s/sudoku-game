import { describe, it, expect, vitest } from 'vitest';
import { randomInt } from './randomInt';


describe('Random Integer', () => {
  it('Return random int between 0 and 1 if no args', () => {
    const randomNumber = randomInt();

    expect(randomNumber).toBeLessThanOrEqual(1);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
  })

  it('Return random int from 0 to provided number, if one argument', () => {
    const randomNumber = randomInt(5);
    expect(randomNumber).toBeLessThanOrEqual(5);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
  })

  it('Return random int from numA to numB', () => {
    const randomNumber = randomInt(4, 6);
    expect(randomNumber).toBeLessThanOrEqual(6);
    expect(randomNumber).toBeGreaterThanOrEqual(4);
  })

  it('Return random int from numB to numA', () => {
    const randomNumber = randomInt(6, 0);
    expect(randomNumber).toBeLessThanOrEqual(6);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
  })
})

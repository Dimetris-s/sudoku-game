import { describe, it, expect } from 'vitest';
import { getRandomArrayElement } from './getRandomArrayElement';


describe('Random array element function', function() {
  it('should return empty array, if passed empty array', function() {
    expect(getRandomArrayElement([])).toEqual([]);
  });
});

export const randomInt = (min?: number, max?: number): number => {
  if(min === undefined && max !== undefined) return Math.round(Math.random() * max);
  if(max === undefined && min !== undefined) return Math.round(Math.random() * min);
  if(min !== undefined && max !== undefined) {
    if(min === max) return min;
    if(min > max) return Math.round(Math.random() * (min - max) + max);
    return Math.round(Math.random() * (max - min) + min);
  }
  return Math.random();
};

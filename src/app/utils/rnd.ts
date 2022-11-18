export const rnd = (min = 0, max = 10): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const getRandomArrayElement = <T extends any = any>(arr: T[] = [], count = 1): T | T[] => {
  if(arr.length === 0) return arr;
  if(count === 1) {
    return arr[rnd(0, arr.length - 1)];
  }
  if(count >= arr.length) return arr;

  const randomElements: T[] = [];
  for(let i = 0; i < count; i++) {
    let randomElement: T = arr[rnd(0, arr.length - 1)];
    while (randomElements.includes(randomElement)) {
      randomElement = arr[rnd(0, arr.length - 1)];
    }
    randomElements.push(randomElement);
  }

  return randomElements;
};

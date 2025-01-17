export const getRandomNumberBetweenMinMax = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
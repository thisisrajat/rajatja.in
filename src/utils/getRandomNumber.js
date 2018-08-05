export function getRandomNumber(startRange, endRange) {
  return Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
}

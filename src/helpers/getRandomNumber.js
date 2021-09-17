/**
 * @param {number} [from]
 * @param {number} [to]
 * @returns {number}
 */
export function getRandomNumber(from = 0, to = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
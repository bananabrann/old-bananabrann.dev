/**
 * Returns a random item from the given array.
 */
export function getRandomFromArray(items: Array<any>): any {
  return items[Math.floor(Math.random() * items.length)];
}

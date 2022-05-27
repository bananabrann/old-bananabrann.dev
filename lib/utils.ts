import fs from "fs";

/**
 * Returns a random item from the given array.
 */
export function getRandomFromArray(items: Array<any>): any {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Returns a random six digit number.
 */
export function getRandomSixDigitNumber(): number {
  const x = Math.random().toString().slice(2,7);
  return Number(x);
}

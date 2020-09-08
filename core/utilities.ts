import { coreTest } from "test";

export function makeRandomName() {
  console.log(coreTest);

  return "Bob!?! ";
}

export function lastElementOf<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

import { makeRandomName } from "@p/core";
import { Dog, createDog } from "@p/animal";

import { test } from "test";

export function createZoo(): Array<Dog> {
  console.log(test, makeRandomName);

  return [createDog()];
}

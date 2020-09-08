import Animal from ".";
import { makeRandomName, test, coreTest } from "@p/core";

export interface Dog extends Animal {
  woof(): void;
  name: string;
}

export function createDog(): Dog {
  return {
    size: "medium",
    woof: function (this: Dog) {
      console.log(`${this.name} ${coreTest} ${test} says "Woof"!`);
    },
    name: makeRandomName(),
    // name: "asd",
  };
}

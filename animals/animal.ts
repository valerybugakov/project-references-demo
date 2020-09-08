import { animalsTest } from "test";

export type Size = "small" | "medium" | "large";

export default interface Animal {
  size: Size;
}

export const data = {
  animalsTest,
};

import { Equal } from "@type-challenges/utils";

export type Includes<T extends any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false;

export type Input = ["a", "b", "c"];

export type Result = Includes<Input, "a">;
export type Result2 = Includes<Input, "d">;

export type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
export type AnotherFirst<T extends any[]> = T extends [infer Head, ...infer Tail] ? Head : never;

export type Input = ['a', 'b', 'c'];

export type Result = First<Input>;
export type ResultOnEmptyArray = First<[]>;

export type Result2 = AnotherFirst<Input>;
export type ResultOnEmptyArray2 = AnotherFirst<[]>;
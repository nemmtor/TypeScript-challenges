export type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key;
};

export type Input = ['a', 'b', 'c'];

export type Result = TupleToObject<Input>;
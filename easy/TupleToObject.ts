type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key;
};

type Input = ['a', 'b', 'c'];

type Result = TupleToObject<Input>;
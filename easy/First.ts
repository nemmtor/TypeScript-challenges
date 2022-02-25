type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

type Input = ['a', 'b', 'c'];

type Result = First<Input>;
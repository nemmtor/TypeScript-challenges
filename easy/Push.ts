export type Push<T extends any[], U> = [...T, U];

export type Input = ['a', 'b', 'c'];

export type Result = Push<Input, 'd'>;
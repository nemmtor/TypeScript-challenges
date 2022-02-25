export type Unshift<T extends any[], U> = [U, ...T];

export type Input = ['b', 'c'];

export type Result = Unshift<Input, 'a'>;
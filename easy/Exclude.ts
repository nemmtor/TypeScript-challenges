export type MyExclude<T, U> = T extends U ? never : T;

export type Input = 'a' | 'b';

export type ToBeExcluded = 'b';

export type Result = MyExclude<Input, ToBeExcluded>;
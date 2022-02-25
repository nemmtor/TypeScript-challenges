export type Includes<T extends any[], U> = U extends T[number] ? true : false;

export type Input = ['a', 'b', 'c'];

export type Result = Includes<Input, 'a'>;
export type Result2 = Includes<Input, 'd'>;
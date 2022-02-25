export type Concat<T extends any[], U extends any[]> = [...T, ...U];

export type Input1 = [1, 2, 3];
export type Input2 = [4, 5, 6];

export type Result = Concat<Input1, Input2>;
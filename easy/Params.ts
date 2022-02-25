export type Params<T> = T extends (...args: infer Args) => any ? Args : never;

export type Input = (a: number, b: string) => void;
export type Input2 = () => void;

export type Result = Params<Input>;
export type Result2 = Params<Input2>;
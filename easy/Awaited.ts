export type Awaited<T> = T extends Promise<infer V> ? V : never;

export type Input = Promise<number>;

export type Result = Awaited<Input>;
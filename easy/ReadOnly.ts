export type ReadOnly<T extends Record<PropertyKey, any>> = {
  readonly [key in keyof T]: T[key];
}

export type Input = {
  x: number;
}

export type Result = ReadOnly<Input>;
type ReadOnly<T extends Record<PropertyKey, any>> = {
  readonly [key in keyof T]: T[key];
}

type Input = {
  x: number;
}

type Result = ReadOnly<Input>;
export type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

export type Input = {
  x: string;
  y: number;
  z: symbol;
}

export type Result = MyPick<Input, 'x'>
export type Result2 = MyPick<Input, 'x' | 'y'>
export type Result3 = MyPick<Input, 'x' | 'y' | 'z'>
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type Input = {
  x: string;
  y: number;
  z: symbol;
}

type Result = MyPick<Input, 'x'>
type Result2 = MyPick<Input, 'x' | 'y'>
type Result3 = MyPick<Input, 'x' | 'y' | 'z'>
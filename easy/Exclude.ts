type MyExclude<T, U> = T extends U ? never : T;

type Input = 'a' | 'b';

type ToBeExcluded = 'b';

type Result = MyExclude<Input, ToBeExcluded>;




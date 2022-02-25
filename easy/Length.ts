type Length<Source extends readonly any[]> = Source['length'];

type Input = ['a', 'b', 'c'];

type Result = Length<Input>;
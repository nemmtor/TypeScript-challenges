export type Length<Source extends readonly any[]> = Source["length"];

export type Input = ["a", "b", "c"];

export type Result = Length<Input>;
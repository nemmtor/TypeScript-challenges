export type If<C extends boolean, T, F> = C extends true ? T : F;

export type Result = If<true, 'a', 'b'>;
export type Result2 = If<false, 'a', 'b'>;
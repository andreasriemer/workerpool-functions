export type Cons<H, T> = T extends ReadonlyArray<unknown>
  ? ((h: H, ...t: T) => void) extends (...r: infer R) => void
    ? R
    : never
  : never;

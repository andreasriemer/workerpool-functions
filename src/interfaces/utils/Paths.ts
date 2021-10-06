import { Cons } from './Cons';
import { Prev } from './Prev';

export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: [K] | (Paths<T[K], Prev[D]> extends infer P ? (P extends [] ? never : Cons<K, P>) : never);
    }[keyof T]
  : [];

import { Leaves } from './utils';

export type WorkerFilter<T> = (
  keys: Leaves<T, 3> | Array<string> | undefined,
  array: Array<T>,
  ...values: Array<T | string | number>
) => Array<T>;

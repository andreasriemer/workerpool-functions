import { Leaves } from './utils';

export type WorkerFilter<T> = (
  array: Array<T>,
  path: Leaves<T, 3> | Array<string> | undefined,
  ...values: Array<T | string | number>
) => Array<T>;

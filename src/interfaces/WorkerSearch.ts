import { Leaves } from './utils';

export type WorkerSearch<T> = (
  array: Array<T>,
  search: string | RegExp | Array<string | RegExp>,
  excludedKeys?: Leaves<T, 3> | Array<string>,
) => Array<T>;

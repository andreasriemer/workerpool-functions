import { Leaves } from './utils';

export type WorkerSearch<T> = (
  array: Array<T>,
  search: string | RegExp | Array<string | RegExp>,
  excludedPaths?: Array<Leaves<T, 3> | Array<string>> | undefined,
) => Array<T>;

import { Leaves } from './utils';

export type WorkerContainsValue<T> = (
  obj: T,
  search: string | RegExp,
  excludedPaths?: Array<Leaves<T, 3> | Array<string>> | undefined,
) => boolean;

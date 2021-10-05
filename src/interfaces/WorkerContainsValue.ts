import { Leaves } from './utils';

export type WorkerContainsValue<T> = (
  obj: T,
  search: string | RegExp,
  excludedKeys?: Leaves<T, 3> | Array<string> | undefined,
) => boolean;

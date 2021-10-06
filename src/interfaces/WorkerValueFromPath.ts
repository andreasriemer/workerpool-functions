import { Leaves } from './utils';

export type WorkerValueFromPath<T, R> = (obj: T, path: Leaves<T, 3> | Array<string>) => R | Array<R>;

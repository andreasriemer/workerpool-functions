import { Leaves, Order } from './utils';

export type WorkerSort<T> = (order: Order, keys: Leaves<T, 3> | Array<string>, array: Array<T>) => Array<T>;

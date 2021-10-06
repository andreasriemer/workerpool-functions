import { Leaves, Order } from './utils';

export type WorkerSort<T> = (array: Array<T>, path: Leaves<T, 3> | Array<string>, order: Order) => Array<T>;

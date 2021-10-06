import { Leaves } from '../interfaces/utils/Leaves';
import { WorkerSort } from '../interfaces/WorkerSort';

const workerSort = <T extends object = {}>(...params: Parameters<WorkerSort<T>>) => {
  const [array, path, order] = params;
  const descendingComparator = (a: T, b: T, keyList: Leaves<T, 3> | Array<string>): number => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let bProp = (keyList as Array<string>).reduce((p: any, c: string) => p[c], b);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let aProp = (keyList as Array<string>).reduce((p: any, c: string) => p[c], a);
    if (typeof bProp === 'string') {
      bProp = bProp.toUpperCase();
    }
    if (typeof aProp === 'string') {
      aProp = aProp.toUpperCase();
    }
    if (bProp < aProp) {
      return -1;
    }
    if (bProp > aProp) {
      return 1;
    }
    return 0;
  };
  return array.sort((a, b) => {
    return order === 'desc' ? descendingComparator(a, b, path) : -descendingComparator(a, b, path);
  });
};

export default workerSort;

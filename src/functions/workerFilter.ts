import { Leaves } from '../interfaces/utils/Leaves';
import { WorkerFilter } from '../interfaces/WorkerFilter';
import valueFromPath from './workerValueFromPath';

const workerFilter = <T extends object = {}>([keys, array, ...values]: Parameters<WorkerFilter<T>>) => {
  return array.filter((value: T) => {
    const entries = [];
    if (keys) {
      const valuesFromPathResult = valueFromPath([value, keys]);
      entries.push([...(Array.isArray(valuesFromPathResult) ? valuesFromPathResult : [valuesFromPathResult])]);
    } else {
      entries.push(value);
    }
    return entries.some((v1) => values.some((v2) => v1 === v2));
  });
};

export default workerFilter;

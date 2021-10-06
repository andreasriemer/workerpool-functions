import { Leaves } from '../interfaces/utils/Leaves';
import { WorkerFilter } from '../interfaces/WorkerFilter';
import workerValueFromPath from './workerValueFromPath';

const workerFilter = <T extends object = {}>(...params: Parameters<WorkerFilter<T>>) => {
  const [array, path, ...values] = params;
  return array.filter((value: T) => {
    const entries = [];
    if (path) {
      const valuesFromPathResult = workerValueFromPath(value, path);
      entries.push([...(Array.isArray(valuesFromPathResult) ? valuesFromPathResult : [valuesFromPathResult])]);
    } else {
      entries.push(value);
    }
    return entries.some((v1) => values.some((v2) => v1 === v2));
  });
};

export default workerFilter;

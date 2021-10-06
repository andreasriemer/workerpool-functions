import { WorkerValueFromPath } from '../interfaces';

const workerValueFromPath = <T extends any, R extends any>([obj, path]: Parameters<WorkerValueFromPath<T, R>>):
  | R
  | Array<R> => {
  return (path as Array<string>).reduce((previous: any, current, currentIndex, array) => {
    if (previous == null) {
      return previous;
    }
    if (previous[current] != null && typeof previous[current] === 'object' && Array.isArray(previous[current])) {
      const remainingPath = [...array].splice(currentIndex + 1);
      return previous[current].reduce((previousListValues: Array<any>, currentListValue: any) => {
        const result = workerValueFromPath([currentListValue, remainingPath]);
        const resultList = Array.isArray(result) ? result : [result];
        if (resultList.length) {
          previousListValues.push(...resultList.filter((e) => e != null));
        }
        return previousListValues;
      }, []);
    }
    if (typeof previous === 'object' && Array.isArray(previous)) {
      const remainingPath = [...array].splice(currentIndex);
      return previous.reduce((previousListValues, currentListValue) => {
        if (typeof currentListValue !== 'object') {
          previousListValues.push(currentListValue);
          return previousListValues;
        }
        const result = workerValueFromPath([currentListValue, remainingPath]);
        const resultList = Array.isArray(result) ? result : [result];
        if (resultList.length) {
          previousListValues.push(...resultList.filter((e) => e != null));
        }
        return previousListValues;
      }, []);
    }
    return previous && previous[current] != null ? previous[current] : undefined;
  }, obj) as R;
};

export default workerValueFromPath;

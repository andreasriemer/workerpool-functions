import escapeStringRegexp from 'escape-string-regexp';
import { WorkerContainsValue } from '../interfaces';

const workerContainsValue = <T extends Record<string, any>>(...params: Parameters<WorkerContainsValue<T>>): boolean => {
  const [obj, search, excludedPaths] = params;
  const searchRegExp = typeof search === 'string' ? new RegExp(escapeStringRegexp(search), 'i') : search;
  return Object.keys(obj).some((key) => {
    if (
      excludedPaths?.length &&
      excludedPaths.some(([firstKey, nextKey]) => {
        return !nextKey && firstKey === key;
      })
    ) {
      return false;
    }
    return !!obj[key] && typeof obj[key] === 'object'
      ? workerContainsValue(
          obj[key],
          search,
          excludedPaths?.length
            ? [...excludedPaths].reduce((prev: Array<Array<string>>, curr: Array<string>) => {
                if (curr.length > 1) {
                  prev.push(curr.slice(1));
                }
                return prev;
              }, [])
            : undefined,
        )
      : (!!obj[key]?.toString && searchRegExp.test(obj[key].toString())) || false;
  });
};

export default workerContainsValue;

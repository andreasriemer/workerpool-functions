import escapeStringRegexp from 'escape-string-regexp';
import { WorkerContainsValue } from '../interfaces';

const workerContainsValue = <T extends Record<string, any>>([obj, search, excludedKeys]: Parameters<
  WorkerContainsValue<T>
>): boolean => {
  const searchRegExp = typeof search === 'string' ? new RegExp(escapeStringRegexp(search), 'i') : search;
  return Object.keys(obj).some((key) => {
    if (excludedKeys && excludedKeys.includes(key)) {
      return false;
    }
    return !!obj[key] && typeof obj[key] === 'object'
      ? workerContainsValue([obj[key], search, excludedKeys])
      : (!!obj[key]?.toString && searchRegExp.test(obj[key].toString())) || false;
  });
};

export default workerContainsValue;

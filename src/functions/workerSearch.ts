import escapeStringRegexp from 'escape-string-regexp';
import workerContainsValue from './workerContainsValue';
import { WorkerSearch } from '../interfaces';

const workerSearch = <T extends object = {}>(...params: Parameters<WorkerSearch<T>>) => {
  const [array, search, excludedPaths] = params;
  const searchRegExpList: Array<RegExp> = [];
  if (Array.isArray(search)) {
    searchRegExpList.push(...search.map((s) => (typeof s === 'string' ? new RegExp(escapeStringRegexp(s), 'i') : s)));
  } else {
    searchRegExpList.push(typeof search === 'string' ? new RegExp(escapeStringRegexp(search), 'i') : search);
  }
  return array.filter((entry) => searchRegExpList.some((regex) => workerContainsValue(entry, regex, excludedPaths)));
};

export default workerSearch;

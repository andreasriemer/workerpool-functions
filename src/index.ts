import { pool, WorkerPool } from 'workerpool';
import {
  WorkerOptions,
  WorkerSort,
  WorkerValueFromPath,
  WorkerContainsValue,
  WorkerFilter,
  WorkerSearch,
} from './interfaces';
import {
  workerValueFromPath as _workerValueFromPath,
  workerContainsValue as _workerContainsValue,
  workerSort as _workerSort,
  workerFilter as _workerFilter,
  workerSearch as _workerSearch,
} from './functions';

export { default as workerOptions } from './constants/workerOptions';
export * from './functions';

let workerPool: WorkerPool;
import('./constants/workerOptions').then((workerOptions: { default: WorkerOptions }) => {
  const { workerSrc, workerPoolOptions } = workerOptions.default;
  workerPool = pool(workerSrc, { ...workerPoolOptions });
});

export const workerValueFromPath = async <T extends object, R extends any>(
  ...params: Parameters<WorkerValueFromPath<T, R>>
) => {
  try {
    return await workerPool.exec('workerValueFromPath', params);
  } catch (e) {
    return new Promise<ReturnType<WorkerValueFromPath<T, R>>>((resolve, reject) => {
      try {
        resolve(_workerValueFromPath<T, R>(...params));
      } catch (e) {
        reject(e);
      }
    });
  }
};

export const workerContainsValue = async <T extends object>(...params: Parameters<WorkerContainsValue<T>>) => {
  try {
    return await workerPool.exec('workerContainsValue', params);
  } catch (e) {
    return new Promise<ReturnType<WorkerContainsValue<T>>>((resolve, reject) => {
      try {
        resolve(_workerContainsValue<T>(...params));
      } catch (e) {
        reject(e);
      }
    });
  }
};

export const workerSort = async <T extends object>(...params: Parameters<WorkerSort<T>>) => {
  try {
    return await workerPool.exec('workerSort', params);
  } catch (e) {
    return new Promise<ReturnType<WorkerSort<T>>>((resolve, reject) => {
      try {
        resolve(_workerSort<T>(...params));
      } catch (e) {
        reject(e);
      }
    });
  }
};

export const workerFilter = async <T extends object>(...params: Parameters<WorkerFilter<T>>) => {
  try {
    return await workerPool.exec('workerFilter', params);
  } catch (e) {
    return new Promise<ReturnType<WorkerFilter<T>>>((resolve, reject) => {
      try {
        resolve(_workerFilter<T>(...params));
      } catch (e) {
        reject(e);
      }
    });
  }
};

export const workerSearch = async <T extends object>(...params: Parameters<WorkerSearch<T>>) => {
  try {
    return await workerPool.exec('workerSearch', params);
  } catch (e) {
    return new Promise<ReturnType<WorkerSearch<T>>>((resolve, reject) => {
      try {
        resolve(_workerSearch<T>(...params));
      } catch (e) {
        reject(e);
      }
    });
  }
};

importScripts('./workerpool.min.js', './workerpool-functions.full.min.js');

workerpool.worker({
  workerValueFromPath,
  workerContainsValue,
  workerSort,
  workerFilter,
  workerSearch
});
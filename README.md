# Workerpool-Functions

**workerpool-functions** offers some basic operations with a dedicated worker created with [workerpool](https://www.npmjs.com/package/workerpool).

## Install

### Install via npm:

    npm install workerpool-functions

### Configure:
We need to copy the "worker" files into our public directory and configure the path to these files. Copy at least `workerpool-functions.full.min.js`, `workerpool-functions.worker.js` and `workerpool.min.js` from `node_modules\workerpool-functions\lib\worker` to your public directory - e.g. `public\libs\workerpool` These 2 files should be in same directory. After that point the application to the path of the `workerpool-functions.full.min.js` file.
```js
import { workerOptions } from 'workerpool-functions';
workerOptions.workerSrc = '/libs/workerpool/workerpool-functions.worker.js';
```

## Sample Usage

Example to sort a list of user informations.
```js
import { workerSort } from 'workerpool-functions';
await workerSort<{name: string; email: string}>('asc', ['email'], [{name: 'My Name', email: 'my@mail.de'}])
```

## Functions

|Name|Description|Arguments|Return|
|----|----|----|----|
|workerValueFromPath&lt;T, R&gt;|Reduces the object to get the value for a given path|<ul><li>obj: T</li><li>path: Leaves&lt;T, 3&gt; &#124; Array&lt;string&gt;</li></ul>|R &#124; Array&lt;R&gt;|
|workerContainsValue&lt;T&gt;|Check existence of a value inside an object|<ul><li>obj: T</li><li>search: string &#124; RegExp</li><li>excludedPaths: Array&lt;Leaves&lt;T, 3&gt; &#124; Array&lt;string&gt;&gt; &#124; undefined</li></ul>|boolean|
|workerSort&lt;T&gt;|...|...|...|
|workerFilter&lt;T&gt;|...|...|...|
|workerSearch&lt;T&gt;|...|...|...|
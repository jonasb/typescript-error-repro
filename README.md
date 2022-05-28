The compiled file [`main.js`](./main.js) is using CommonJS module even though "Node16" is specified in [`tsconfig.json`](./tsconfig.json) and Node is configured for ESM (`"type": "module"` in [`package.json`](./package.json)).

When trying to run the compiled file I get this error:

```bash
$ node main.js
file:///.../typescript-error-repro/main.js:5
Object.defineProperty(exports, "__esModule", { value: true });
                      ^

ReferenceError: exports is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/.../typescript-error-repro/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///Users/jonas/dev/explore/typescript-error-repro/main.js:5:23
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
```

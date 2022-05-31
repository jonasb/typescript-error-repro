Typescript fails to resolve the declaration file for `@js-temporal/polyfill`. The project is using module: "Node16" (specified in [`tsconfig.json`](./tsconfig.json)) and Node is configured for ESM (`"type": "module"` in [`package.json`](./package.json)).

When trying to build I get this error:

```bash
$ npm run build
main.ts:1:26 - error TS7016: Could not find a declaration file for module '@js-temporal/polyfill'. '/Users/jonas/.../typescript-error-repro/node_modules/@js-temporal/polyfill/dist/index.esm.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/js-temporal__polyfill` if it exists or add a new declaration (.d.ts) file containing `declare module '@js-temporal/polyfill';`

1 import { Temporal } from '@js-temporal/polyfill';
                           ~~~~~~~~~~~~~~~~~~~~~~~
```

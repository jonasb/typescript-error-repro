import { Temporal } from '@js-temporal/polyfill'

console.log('Time is ' + Temporal.Now.instant().toLocaleString());

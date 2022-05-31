import { Temporal } from '@js-temporal/polyfill';
console.log('Time is now: ' + Temporal.Now.instant().toLocaleString());

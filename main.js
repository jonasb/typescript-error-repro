"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
console.log('Time is ' + polyfill_1.Temporal.Now.instant().toLocaleString());

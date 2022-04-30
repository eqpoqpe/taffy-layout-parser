/**
 * tlp_taco_default.js - taffy_layout_parser
 * 
 *  _______       _____ ____
 * |__   __|/\   / ____/ __ \
 *    | |  /  \ | |   | |  | |
 *    | | / /\ \| |   | |  | |
 *    | |/ ____ \ |___| |__| |
 *    |_/_/    \_\_____\____/
 *
 * Behavior Up Normally Code Defined Here
 * Working with pepper
 */

// Usually
// 0 -> global
// 1 -> class
// 2 -> inherit
// 3 -> write
// 9 -> for
// 13 -> props | 14 -> expose
// 12 -> change
// Not Usually
// 4 -> once
// 5 -> read

// the default behavior
// 6 -> before
// 7 -> after
// 8 -> fetch

// when data is updated,
// compare it to the prev data,
// and if the value is equal,
// components that reference this value will not be re-rendered
// 10 -> state
// 11 -> scope

export default tlp_TACO_DEFAULT_CODES = Object.create({}, {
  "global": {
    value: 0,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "class": {
    value: 1,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "inherit": {
    value: 2,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "write": {
    value: 3,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "once": {
    value: 4,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "read": {
    value: 5,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "before": {
    value: 6,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "after": {
    value: 7,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "fetch": {
    value: 8,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "for": {
    value: 9,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "state": {
    value: 10,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "scope": {
    value: 11,
    enumerable: false,
    configurable: false,
    writable: false
  },
  "change": {
    value: 12,
    enumerable: false,
    configurable: false,
    writable: false
  },
});

/**
 * index.js - present
 * _______       ______ ________     __
 *|__   __|/\   |  ____|  ____\ \   / /
 *   | |  /  \  | |__  | |__   \ \_/ /
 *   | | / /\ \ |  __| |  __|   \   /
 *   | |/ ____ \| |    | |       | |
 *   |_/_/    \_\_|    |_|       |_|
 * 
 * Copyright (c) 2022 Ryan Martin
 */

import eventDefault from "../fifi/event.default";
import propertyDefault from "../fifi/property.default";
import dataDefault from "../fifi/data.default";

export default function naivePresent() {
  return {
    onData: {

      /**
       * 
       * @param {string|symbol} s 
       * @param {*} value 
       * @returns 
       */
      create(s, value) {
        // const _that_data = this[s] = value;
        // this[`set${s}`] = function (sp) {
        //   if (typeof sp === "function") {
        //     _that_data = sp(_that);
        //   } else {
        //     _that_data = sp;
        //   }
        // };

        const _that_data = new dataDefault();

        return {

          /**
           * 
           * @param {Function} p when value has changed
           */
          effect(p) { },

          /**
           * 
           * state
           * 
           * @param {{state: boolean}} options 
           * @returns 
           */
          on(options) {
            return {
              state() { }
            };
          }
        }
      }
    },
    onEvent: {

      /**
       *
       * @param {string|symbol} s
       * @returns {{effect: Function, on: Function}}
       */
      create(s) {
        const _that_event = this[s] = new eventDefault();

        return {

          /**
           * 
           * @param {Function} fn 
           * @param {*} fn_args 
           */
          effect(fn, ...fn_args) {
            _that_event.effect.fn = typeof fn === "function" ? fn : null;

            // @event, pure data
            if (fn_args.length > 0) { }
          },

          /**
           * 
           * https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
           * 
           * @param {string} et event type 
           * @param {{once: boolean, after: boolean}} options
           */
          on(et, options) {
            _that_event.__type = (typeof et === "string") ? et : null;

            _that_event.options(options);

            return {
              once() { _that_event.__once = true; },

              // working for lifecycle
              // mounted
              after() { _that_event.__after = true; }
            }
          },
        }
      }
    }
  };
};

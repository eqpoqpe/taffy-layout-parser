/**
 * index.js - present
 * _______       ______ ________     __
 *|__   __|/\   |  ____|  ____\ \   / /
 *   | |  /  \  | |__  | |__   \ \_/ /
 *   | | / /\ \ |  __| |  __|   \   /
 *   | |/ ____ \| |    | |       | |
 *   |_/_/    \_\_|    |_|       |_|
 */

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
        const _that_data = this[s] = value;
        this[`set${s}`] = function (sp) {
          if (typeof sp === "function") {
            _that_data = sp(_that);
          } else {
            _that_data = sp;
          }
        };

        return {

          /**
           * 
           * @param {Function} p 
           * @returns
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
        const _event = this[s] = {

          // user defined
          _$: 1,
          handle: null,

          // event type
          type: null,
          once: false,

          // after at component mounted
          // default is before
          after: false,
        };

        return {

          /**
           * 
           * @param {Function} fn 
           * @param {*} fn_args 
           */
          effect(fn, ...fn_args) {
            _that.handle = typeof fn === "function" ? fn : null;

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
            _that.type = et;

            return {
              // once() { _that.once = true; },

              // // working for lifecycle
              // // mounted
              // after() { _that.after = true; }
            }
          },
        }
      }
    }
  };
};

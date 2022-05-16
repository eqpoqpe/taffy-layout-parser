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
    onEvent: {

      /**
       *
       * @param {string|symbol} s
       * @returns {{effect: Function, on: Function}}
       */
      create(s) {
        const _that = this[s] = {

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

            // @event
            // prue data
            if (fn_args.length > 0) { }
          },

          /**
           * 
           * @param {string} et event type 
           */
          on(et) {
            _that.type = et;

            return {
              once() { _that.once = true; },
              after() { _that.after = true; }
            }
          },
        }
      }
    }
  };
};

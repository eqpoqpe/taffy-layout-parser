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
      create(s) {
        const _that = this[s] = null;
        this[`set${s}`] = function (sp) {
          if (typeof sp === "function") {
            _that = sp(_that);
          } else {
            _that = sp;
          }
        };

        return {

          /**
           * 
           * @param {*} s 
           * @returns
           */
          value(s) {
            _that = s;

            return this;
          },

          /**
           * 
           * @param {Function} p 
           * @returns
           */
          effect(p) { },

          /**
           * 
           * @param {{state: boolean}} options 
           * @returns 
           */
          on(options) {
            return {};
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

            // @event, pure data
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

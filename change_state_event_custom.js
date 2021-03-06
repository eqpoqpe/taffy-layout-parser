/**
 * change_state_event_custom.js - taffy-layout-parser
 */

/**
 * [Proxy] - [dispatchEvent]
 *    |    /
 *  [Element]
 */

const stateEvent = new Event('stateChange');
const page = document.createElement('div');

document.body.appendChild(page);

const event_buck = {
  listen: 'count',
  buck: [],
};

function Buck(el) {
  event_buck.buck.push(el);
}

const state = new Proxy(
  { count: 0 },
  {
    get(t, k, r) {},
    set(t, k, v) {
      const _value = v;

      if (typeof t[k] !== 'undefined') {
        if (!Object.is(t[k], _value)) {
          t[k] = _value;
          if (k === event_buck.listen) {
            event_buck.buck.forEach((el) => {
              el.dispatchEvent(stateEvent);
            });
          }
        }
      }
    },
  }
);

page.addEventListener('stateChange', () => {
  console.log('DONE');
});

Buck(page);

const dispatch_0 = document.querySelector('#dispatch_0');
const dispatch_1 = document.querySelector('#dispatch_1');

dispatch_0.onclick = function () {
  state.count = 22;
};
dispatch_1.onclick = function () {
  state.count = 0;
};

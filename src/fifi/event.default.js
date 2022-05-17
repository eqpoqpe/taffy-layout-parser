export default class {
  constructor() {
    this._$ = 1;
    this.__type = null;
    this.__effect = { fn: null, args: [] };
    this.__once = false;
    this.__after = false;
  }

  /**
   * 
   * @param {{state: boolean, once: boolean}} o 
   */
  option(o) {
    if (typeof o !== "undefined") {
      // Object.entries(o).forEach(() => {});
    }
  }
};
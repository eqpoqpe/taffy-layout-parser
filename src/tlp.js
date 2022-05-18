/**
 * tlp.js - taffy_layout_parser
 * 
 *  _______       _____ ____
 * |__   __|/\   / ____/ __ \
 *    | |  /  \ | |   | |  | |
 *    | | / /\ \| |   | |  | |
 *    | |/ ____ \ |___| |__| |
 *    |_/_/    \_\_____\____/
 *
 * Behavior Up Normally Code Defined Here
 * 
 * Copyright (c) 2022 Ryan Martin
 */

/**
 * 
 * Fifi style
 * 
 * @param {{}} tle 
 */
export default function (tle) {

  /**
   * +---------------------+
   * |   +---+ +---------+ |
   * |   |   | |   +---+ | |
   * | A | B | | C | D | | |
   * |   |   | |   +---+ | |
   * |   +---+ +---------+ |
   * +---------------------+
   */
};

export function Default() {
  const root = document.querySelector("#page-root");

  if (root === null) {
    root = document.createElement("div");
    
    root.setAttribute("default", "");
    root.setAttribute("id", "page-root");

    document.body.appendChild(root);
  }

  return root;
}

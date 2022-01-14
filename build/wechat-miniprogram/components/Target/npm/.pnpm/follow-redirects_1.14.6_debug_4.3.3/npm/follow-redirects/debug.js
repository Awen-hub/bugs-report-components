"use strict";

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = require("../../../debug_4.3.3_supports-color_6.1.0/npm/debug/src/index.js")("follow-redirects");
    } catch (error) {
      /* */
    }

    if (typeof debug !== "function") {
      debug = function debug() {
        /* */
      };
    }
  }

  debug.apply(null, arguments);
};
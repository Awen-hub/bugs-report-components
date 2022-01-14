"use strict";

exports.__esModule = true;
exports.default = void 0;

var _rax = require("rax");

var _component = _interopRequireDefault(require("./component"));

var _index = _interopRequireDefault(require("./index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleSheet = _index.default;

var MyComponent = function () {
  return (0, _rax.createElement)(_component.default, null);
};

var _default = MyComponent;
exports.default = _default;
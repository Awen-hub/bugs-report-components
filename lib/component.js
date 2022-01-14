"use strict";

exports.__esModule = true;
exports.default = void 0;

var _rax = require("rax");

var _raxView = _interopRequireDefault(require("rax-view"));

var _raxText = _interopRequireDefault(require("rax-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component2 = function (props) {
  var b = [].concat([1, 2, 3]);
  return (0, _rax.createElement)(_raxView.default, null, (0, _rax.createElement)(_raxText.default, null, "Hello world!", b[2], props.a));
};

var _default = Component2;
exports.default = _default;
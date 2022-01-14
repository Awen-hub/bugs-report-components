import { createElement } from 'rax';
import Component2 from './component';
import indexStyleSheet from './index.css';
var _styleSheet = indexStyleSheet;

var MyComponent = function () {
  return createElement(Component2, null);
};

export default MyComponent;
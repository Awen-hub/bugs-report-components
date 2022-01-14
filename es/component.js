import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

var Component2 = function (props) {
  var b = [].concat([1, 2, 3]);
  return createElement(View, null, createElement(Text, null, "Hello world!", b[2], props.a));
};

export default Component2;
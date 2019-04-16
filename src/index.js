import _ from 'lodash'
import $ from 'jquery'
import holle from './vilian'

function component() {
  let element = $("<div></div>");

  // Lodash, currently included via a script, is required for this line to work
  element.html(_.join(['Hello', 'webpack'], ' '));

  return element.get(0);
}

document.body.appendChild(component());
console.log(holle);
console.log(holle());

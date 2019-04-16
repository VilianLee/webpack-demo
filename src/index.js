import _ from 'lodash'
import $ from 'jquery'
import holle from './vilian'
import './style.css'
import logo from './bgw_logo.png'

function component() {
  let element = $("<div></div>");

  // Lodash, currently included via a script, is required for this line to work
  element.html(_.join(['Hi', 'webpack'], ' '));
  element.addClass('hello');

  let myIcon = new Image();
  myIcon.src = logo;
  element.append(myIcon);

  return element.get(0);
}

document.body.appendChild(component());
console.log(holle);
console.log(holle());

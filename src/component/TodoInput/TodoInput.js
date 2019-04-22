import React, { Component } from 'react';
import './TodoInput.css';

export default class TodoInput extends Component {
  render(){
    return <input className="TodoInput" type="text" value={this.props.value} placeholder={this.props.placeholder}/>
  }
}

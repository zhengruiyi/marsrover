import React, { Component } from 'react';
import '../styles/App.css'

export default class GetImageButton extends Component{
  render(){
    return (
      <div>
        <button onClick={this.props.onClick}>Get Rover Image</button>
      </div>
    )
  }
}

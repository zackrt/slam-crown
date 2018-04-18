import React, { Component } from 'react';

export class SymptomOption extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={{backgroundColor:this.props.selected ? "darkblue": "white" }}>
        {this.props.name}
      </div>
    )
  }
}

export default SymptomOption

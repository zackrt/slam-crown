import React, { Component } from 'react';

export class SymptomOption extends Component {
  render() {
    const style = {
      backgroundColor:this.props.selected ? "darkblue": "white", 
      color:this.props.selected ? "white":"black"
    }
    return (
      <div onClick={this.props.onClick} style={style}>
        {this.props.name}
      </div>
    )
  }
}

export default SymptomOption

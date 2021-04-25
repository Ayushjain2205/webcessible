import React, { Component } from "react";

export class ErrorTile extends Component {
  render() {
    return (
      <div className='error-tile'>
        <h3>Language missing</h3>
        <h4>Document language missing</h4>
        <h5>Count - 1</h5>
        <h5>Xpath : # </h5>
      </div>
    );
  }
}

export default ErrorTile;

import React, { Component } from "react";
import ErrorTile from "./ErrorTile";
import ErrorTile2 from "./ErrorTile2";
import ErrorTile3 from "./ErrorTile3";

export class Errors extends Component {
  render() {
    return (
      <div>
        <h1 className='error-head'> Errors:</h1>
        <ErrorTile />
        <ErrorTile2 />
        <ErrorTile3 />
      </div>
    );
  }
}

export default Errors;

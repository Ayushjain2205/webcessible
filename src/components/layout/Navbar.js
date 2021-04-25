import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

export class Navbar extends Component {
  render() {
    const element = <FontAwesomeIcon icon={faUniversalAccess} />;
    return (
      <nav className='navbar'>
        <h1>Webcessible {element}</h1>
      </nav>
    );
  }
}

export default Navbar;

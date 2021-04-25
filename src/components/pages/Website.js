import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Stats from "../layout/Stats";
import Errors from "../layout/Errors";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

export class Website extends Component {
  getWebData = async () => {
    await axios.get(
      "https://wave.webaim.org/api/request?key={yourAPIkey}&reporttype=4&url=https://google.com/"
    );
  };
  render() {
    const element = <FontAwesomeIcon className='checked' icon={faUserCheck} />;
    const { state } = this.props.location;
    return (
      <div>
        <Navbar />
        <h1 className='web-name'>
          {element} {state.url}
        </h1>
        <Stats />
        <Errors />
      </div>
    );
  }
}

export default Website;

import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import SearchBox from "../layout/SearchBox";
import Particles from "react-particles-js";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Particles
          style={{ position: "absolute" }}
          height='95%'
          width='95%'
          params={{
            particles: {
              color: {
                value: "#000000",
              },
              line_linked: {
                color: {
                  value: "#000000",
                },
              },
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default Home;

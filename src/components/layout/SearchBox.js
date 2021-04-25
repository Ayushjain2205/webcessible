import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export class SearchBox extends Component {
  state = {
    url: "",
  };

  onChange = (e) => {
    this.setState({ url: e.target.value });
  };

  sendData = () => {
    this.props.history.push({
      pathname: "/website",
      state: { url: this.state.url },
    });
  };

  render() {
    const element = <FontAwesomeIcon icon={faUserCheck} />;
    return (
      <div className='searchBox'>
        <input
          type='text'
          name='url'
          id='url'
          value={this.state.url}
          onChange={this.onChange}
        />
        <Link
          to={{
            pathname: "/website",
            state: { url: this.state.url }, // your data array of objects
          }}
        >
          <button type='button' id='search-btn'>
            Check {element}
          </button>
        </Link>
      </div>
    );
  }
}

export default SearchBox;

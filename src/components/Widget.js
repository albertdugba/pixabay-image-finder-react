import React, { Component } from "react";
import "../App.css";
import axios from "axios";

import "../App.css";

class Widget extends Component {
  state = {
    value: ""
  };

  onChange = event => input => {
    let inputValue = event.target.value;
    axios.get(
      `https://pixabay.com/api/videos/?key=12767634-de61c4a8d872248a18dce66ea&q=${inputValue}`
    );
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="widget">
        <h2>PixaBay Videos</h2>
        <div className="video">
          <input
            name="input"
            type="text"
            placeholder="videos"
            onChange={this.onChange}
          />
        </div>
        <div className="side-widget">
          <p>Video-One</p>
          <p>Video-Two</p>
          <p>Video-Two</p>
          <p>Video-Two</p>
        </div>
      </div>
    );
  }
}

export default Widget;

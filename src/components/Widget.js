import React, { Component } from "react";
import axios from "axios";

import "../App.css";

class Widget extends Component {
  state = {
    value: ""
  };

  onChange = event => input => {
    axios.get(
      "https://pixabay.com/api/videos/?key=12767634-de61c4a8d872248a18dce66ea&q=yellow+flowers"
    );
  };
  render() {
    return (
      <div className="video">
        <input
          type=""
          placeholder="videos"
          onChange={this.onChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Widget;

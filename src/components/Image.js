import React, { Component } from "react";
import { Link } from "react-router-dom";

class Image extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Go back <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Image;

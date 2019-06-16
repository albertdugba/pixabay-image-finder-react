import React, { Component } from "react";
import App from "../App.css";

class SearchForm extends Component {
  state = {
    inputKey: ""
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addSearchQuery(this.state.inputKey);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            onChange={this.state.onChangeHandler}
            name="inputKey"
            type="text"
            value={this.state.inputKey}
            placeholder="Search for awesome images"
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;

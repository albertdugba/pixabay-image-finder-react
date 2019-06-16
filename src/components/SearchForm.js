import React, { Component } from "react";
import "../App.css";

class SearchForm extends Component {
  state = {
    inputKey: ""
  };

  onChangeHandler = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addSearchQuery(this.state.inputKey);
    this.setState({ inputKey: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="inputKey"
          value={this.state.inputKey}
          onChange={this.onChangeHandler}
          placeholder="Search for awesome images"
        />
      </form>
    );
  }
}

export default SearchForm;

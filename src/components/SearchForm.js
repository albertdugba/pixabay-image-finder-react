import React, { useState } from "react";
// import SearchQuery from "../pages/Home";
import "../App.css";

const SearchForm = props => {
  const { search } = props;
  const [query, setQuery] = useState("");

  const onChangeHandler = event =>
    setQuery({ [event.target.name]: event.target.value });

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(search(event.target.value));

    resetForm();
  };

  const resetForm = () => {
    setQuery("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={query}
        type="text"
        name="query"
        onChange={onChangeHandler}
        placeholder="Search for awesome images"
      />
    </form>
  );
};

export default SearchForm;

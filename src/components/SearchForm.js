import React, { useState } from "react";
import { SearchBar } from "../styles/GlobalStyles";

import "../App.scss";

const SearchForm = ({ search }) => {
  const [query, setQuery] = useState("");

  const onChangeHandler = event => setQuery(event.target.value);

  const onSubmitHandler = event => {
    event.preventDefault();
    search(query);
    resetForm();
    console.log(event);
  };

  const resetForm = () => {
    setQuery("");
  };

  return (
    <SearchBar>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={query}
          name="query"
          onChange={onChangeHandler}
          placeholder="Search for awesome images"
        />
      </form>
    </SearchBar>
  );
};

export default SearchForm;

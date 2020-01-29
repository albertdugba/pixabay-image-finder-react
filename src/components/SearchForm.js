import React, { useState } from "react";
import "../App.css";

const SearchForm = ({ search }) => {
  const [query, setQuery] = useState("");

  const onChangeHandler = event => setQuery(event.target.value);

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(search(query));
    resetForm();
  };

  const resetForm = () => {
    setQuery("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={query}
        name="query"
        onChange={onChangeHandler}
        placeholder="Search for awesome images"
      />
    </form>
  );
};

export default SearchForm;

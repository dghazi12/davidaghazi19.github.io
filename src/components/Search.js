import React from "react";
import { Search } from '../style/layout.components'

function SearchForm(props) {
  return (
    <Search>
    <form>
      <div className="form-group">
        <label htmlFor="search">Search: </label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
    </Search>
  );
}

export default SearchForm;
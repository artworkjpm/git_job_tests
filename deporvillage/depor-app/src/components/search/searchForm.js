import React from "react";

const SearchLastName = props => {
  return (
    <form className="form-inline search m-4">
      <label>
        Search:
        <input
          className="form-control ml-4"
          type="text"
          placeholder="Last Name"
          value={props.onvalue}
          onChange={props.onChange}
        />
      </label>
    </form>
  );
};

export default SearchLastName;

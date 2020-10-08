///Search component used for searching people bu name or gender
import React from "react";
const Search = ({ change }) => {
  return (
    <div className="padding">
      <input
        type="text"
        placeholder="Search"
        onChange={change}
        className="input"
      />
    </div>
  );
};

export default Search;

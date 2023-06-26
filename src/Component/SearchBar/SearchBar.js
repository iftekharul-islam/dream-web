import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch, placeHolder = "Search" }) {
  const [term, setTerm] = useState("");

  const onSubmit = () => {
    onSearch(term);
  };

  return (
    <div className="search_container">
      <form className="search_bar">
        <input type="text" onChange={(e) => setTerm(e?.target?.value)} placeholder={placeHolder}/>
        <div type="submit" className="submit" onClick={onSubmit}>
          <FaSearch />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

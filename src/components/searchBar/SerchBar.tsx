import React, { useState } from "react";

interface searchBarProps {
  labelText: string;
  search?: any;
}

const SearchBar: React.FC<searchBarProps> = ({ labelText, search }) => {
  const [term, setTerm] = useState("");

  const changeHandler = (event) => {
    event.persist();
    setTerm(event.target.value);
    search(event.target.value);
  };
  return (
    <div>
      <div className="search">
        <div className="search__field">
          <label className="search__field__label">{labelText}</label>
          <input
            value={term}
            onChange={changeHandler}
            className="search__field__input"
            // placeholder="Rua Américo Brasiliense, São Paulo"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

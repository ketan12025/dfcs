import React from "react";

function Header({ handleSearch ,searchValue }) {
  return (
    <div className="header">
      <p className="header-text">Team</p>
      <div className="search-bar">
        <div className="search-icon">&#x1F50D;</div>
        <input
          className="search-bar-input"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchValue}
        ></input>
      </div>
    </div>
  );
}

export default Header;

/**
 * author : md atiqul islam
 * this file contain desktop navbar searchBar
 *
 */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../contexts/AuthProvider";

const Search = () => {
  const { searchText, setSearchText } = useContext(StateContext);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    navigate("/search", { state: searchText });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search", { state: searchText });
    }
  };
  return (
    <div>
      <div className="bg-white focus:border-[#6A802D] py-1 px-2 flex border-slate-300 rounded-full border-[2px]">
        <input
          className=" border-none  w-[410px] ml-4 text-inherit outline-none"
          type="text"
          name="name"
          placeholder="Search among 100000 products"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button
          disabled={!searchText}
          onClick={handleSearch}
          className=" ml-[20px] font-bold rounded-full px-5 py-2 bg-[#8caf2b] text-white hover:bg-[#6A802D] transition duration-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
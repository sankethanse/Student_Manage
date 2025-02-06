import React from "react";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchInput;

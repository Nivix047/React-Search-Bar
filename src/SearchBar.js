import React, { useState } from "react";
import users from "./data";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = searchTerm
    ? users.filter((user) =>
        user.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1>User Search</h1>
      <input
        type="text"
        placeholder="Search users.."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";

export default function SearchSuggestions() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    // console.log(query)
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : null;

      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  async function fetchListOfUser() {
    try {
      setLoading(true);
      const data = await fetch("https://dummyjson.com/users");
      const json = await data.json();

      //   console.log(json);
      if (json && json.users && json.users.length) {
        setUsers(json.users.map((userItem) => userItem.firstName));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUser();
  }, []);

  // console.log(users, filteredUsers);

  if (loading) {
    return <h1>Loading data...</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
        paddingLeft: "600px",
        marginTop: "20px",
      }}
    >
      {}
      <input
        type="text"
        value={searchParam}
        name="input-search"
        onChange={handleChange}
        placeholder="Search User"
      />
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}

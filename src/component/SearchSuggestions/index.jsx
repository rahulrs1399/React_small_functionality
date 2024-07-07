import { useEffect, useState } from "react";

export default function SearchSuggestions() {
  const [users, setUsers] = useState(null);

  async function fetchListOfUser() {
    try {
      const data = await fetch("https://dummyjson.com/users");
      const json = await data.json();

      //   console.log(json);
      if (json && json.users && json.users.length) {
        setUsers(json.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUser();
  }, []);

  return (
    <div>
      <input
        type="text"
        name="input-search"
        
        placeholder="Search User"
      />
    </div>
  );
}

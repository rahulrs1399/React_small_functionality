import { useEffect, useState } from "react";
import "./style.css"
import User from "./User";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("rahulrs1399");
  const [userData, setUserData] = useState(userName)
  const [loading, setLoading] = useState(true)

  async function fetchGithubID() {
    setLoading(true)
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const json = await data.json();

    if (json) {
        setUserData(json);
        setLoading(false)
        setUserName("")
    }
  }

  useEffect(() => {
    fetchGithubID();
  }, []);

  function handlesubmit(){
    fetchGithubID();
  }

  if(loading){
    return <h1>Loading data! Please</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input 
        type="text" 
        placeholder="Type github username"
        name="search-by-username" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)}
        className="inputBox"
        />
        <button onClick={() => handlesubmit()}>Search</button>
      </div>
      <div className="body-content">
        {userData != null ? <User user={userData} /> : <p>Github User Details</p>}
      </div>
    </div>
  );
}

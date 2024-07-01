import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (

    <nav>
      <main>
        <Link to={"/tabs"}>Tabs</Link>
      </main>
    </nav>
    );
};

export default Navigation;
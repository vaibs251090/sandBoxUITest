import React from "react";
import { getUser } from "../../services/userService";

const Home = () => (
  <div>
    <h1>This is Home</h1>
    <button
      name="name"
      onClick={async function() {
        const user = await getUser(1);
        console.log("user is", user);
      }}
    >
      Click me
    </button>
  </div>
);

export default Home;

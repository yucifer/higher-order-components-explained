import React from "react";

import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>HOC USAGE UPDATED</h1>
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        dataSource="https://jsonplaceholder.typicode.com/posts"
        name="Yihua"
        email="yihuazhang@gmail.com"
      />
    </div>
  );
}

export default App;

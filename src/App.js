// App.js
import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserList users={users} setUsers={setUsers} />
      <UserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default App;


// UserList.js
import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "./api";

// ... (import statements remain unchanged)

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getUsers = async () => {
        try {
          const data = await fetchUsers();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
          // Handle errors and display an error message to the user
          // setError("Failed to fetch users. Please try again.");
        } finally {
          setLoading(false);
        }
      };
  
      getUsers();
    }, []);
  
    const handleDeleteUser = async (userId) => {
      try {
        const deletedUser = await deleteUser(userId);
        if (deletedUser) {
          setUsers(users.filter((user) => user.id !== userId));
        }
      } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
        // Handle errors and display an error message to the user
        // setError("Failed to delete user. Please try again.");
      }
    };
  
    return (
      <div>
        <h2>User List</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email} - {user.role}
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  // ... (export statement remains unchanged)
  
  export default UserList;
  
// api.js
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    // Add more dummy data as needed
  ];
  
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 500);
    });
  };
  
  export const addUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { ...user, id: users.length + 1 };
        users.push(newUser);
        resolve(newUser);
      }, 500);
    });
  };
  
  export const deleteUser = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = users.findIndex((user) => user.id === userId);
        if (index !== -1) {
          const deletedUser = users.splice(index, 1)[0];
          resolve(deletedUser);
        } else {
          resolve(null);
        }
      }, 500);
    });
  };
  
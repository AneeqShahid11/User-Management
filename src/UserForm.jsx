// UserForm.js
import React, { useState } from "react";
import { addUser } from "./api";

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await addUser(formData);

      if (newUser) {
        onAddUser(newUser);
        setFormData({ name: "", email: "", role: "" });
      }
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle errors and display an error message to the user
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add User</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label style={styles.label}>
          Role:
          <input
            style={styles.input}
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </label>
        <button style={styles.button} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    margin: "5px 0",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};

export default UserForm;

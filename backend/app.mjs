// app.js
import express from 'express';
import { json } from 'body-parser';
import pkg from 'body-parser';




const app = express();
const PORT = 3001;

app.use(json());

const users = [
  { id: 1, name: "Ali", email: "Ali@email.com", role: "Admin" },
  
];

// GET endpoint to fetch users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST endpoint to add new users
app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;

  // Basic server-side email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const newUser = { id: users.length + 1, name, email, role };
  users.push(newUser);

  // Log the validated user data
  console.log('New User:', newUser);

  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

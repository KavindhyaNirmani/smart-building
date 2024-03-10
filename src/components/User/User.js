import React, { useState, useEffect } from "react";
import { app, auth } from "../../firebase";
import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    userName: "",
    userEmail: "",
    userID: "",
    password: "",
  });

  useEffect(() => {
    // Fetch user data from Firebase Realtime Database and update state
  }, []);

  const addUser = () => {
    // Add new user to the Firebase Realtime Database
  };

  const deleteUser = (userId) => {
    // Delete user from the Firebase Realtime Database
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User ID</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userName}</td>
              <td>{user.userEmail}</td>
              <td>{user.userID}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => deleteUser(user.userID)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="userName"
                value={newUser.userName}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="userEmail"
                value={newUser.userEmail}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="userID"
                value={newUser.userID}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button onClick={addUser}>Add User</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;

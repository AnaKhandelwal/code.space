import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css"; 
import Axios from 'axios';

const LoginPage = ({ setPage }) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  // Get users from API
  const loadData = async () => {
    try {
      const response = await Axios.get('http://localhost:3003/users');
      setUsers(response.data);
    } catch (err) {
      console.log('Error fetching users:', err);
    }
  };

  const loginUser = (e) => {
    e.preventDefault();

    const user = users.find(u => u.username === username && u.pass === password);
    if (user) {
      console.log('Login successful');
      setPage('home'); 
    } else {
      sendNotification(username, 'Incorrect username or password');
      setError('Incorrect username or password');
    }
  };

  const sendNotification = (username, message) => {
    Axios.post('http://localhost:3003/notify', { username, message })
      .then(() => {
        console.log('Notification sent');
      })
      .catch((err) => {
        console.log('Notification error:', err);
      });
  };

  return (
    <div>
      <img src="_code.space.png" className={styles.logo} alt="Logo" />
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={loginUser}> 
          <label htmlFor="usr"><b>Username</b></label>
          <input 
            type="text" 
            placeholder="Enter Username" 
            name="usr" 
            id="usr" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required  
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input 
            type="password" 
            placeholder="Enter Password" 
            name="psw" 
            id="psw" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <br />
          <button type="submit" className={styles.registerbtn}>Login</button> 
          <p>Don't have an account? <a href="#" onClick={() => setPage("getStarted")}>Sign up</a>.</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

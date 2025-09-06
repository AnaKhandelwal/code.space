import React from "react";
import styles from "./RegisterPage.module.css"; 
import {useEffect,useState} from "react" ;
import Axios from "axios" ;
const RegisterPage = ({ setPage }) => {
  const [users,setUsers] = useState([]); 
  const [username,setUsername] = useState(""); 
  const[email,setEmail] = useState(""); 
  const[dob,setDob] = useState(""); 
  const[pass,setPass] = useState(""); 
  
 
 
  useEffect(() => { 
    loadData(); 
  },[]); 
 
//get user from API 
const loadData = async () => { 
  const response = await Axios.get('http://localhost:3003/users'); 
  console.log(response.data); 
  setUsers(response.data) //to pass the fetched data 
} 
 
//Add user 
const AddUser = (e) => { 
  e.preventDefault(); 
  Axios.post('http://localhost:3003/users', { 
    username,email,dob,pass 
  }).then(() => { 
    setUsername(""); setEmail(""); setDob("");setPass("");  
  }).catch((err)=> { 
    console.log(err); 
  }) 
 
  setTimeout(()=> 
  { 
     loadData(); 
  },500) 
}
  return (
    
      <div>
      <img className={styles.logo} src="_code.space.png" alt="Logo" />
      <div className={styles.container}>
      <h1>Get Started!</h1>

      <form action="">
        <label htmlFor="usr"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="usr" id="usr"  value={username} onChange={e => setUsername(e.target.value)} required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label htmlFor="dob"><b>Date of Birth</b></label>
        <input type="date" id="dob" name="dob" value={dob} onChange={e => setDob(e.target.value)} required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" value={pass} onChange={e => setPass(e.target.value)} required />

        <a className={styles.fp} href="#">Forgot password?</a>
        <br />

        <button type="submit" onClick={(e) => {e.preventDefault();setPage("home");AddUser(e);}} className={styles.registerbtn}>Register</button>

        <p>Already have an account? <a href="login.html">Log in</a>.</p>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
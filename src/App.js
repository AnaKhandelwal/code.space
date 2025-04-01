import React, { useState } from "react";
import Landing from "./components/Landing";
import LoginPage from "./components/LoginPage";
import GetStartedPage from "./components/GetStartedPage";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Discuss from "./components/Discuss";
import Hackathon from "./components/Hackathon";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  const [page, setPage] = useState("landing");  
  const [history, setHistory] = useState([]);
  const goBack = () => {
    const prevHistory = [...history];
    const lastPage = prevHistory.pop();
    setHistory(prevHistory);
    setPage(lastPage);
};
  return (
    <div>
    {page === "landing" && <Landing setPage={setPage} setHistory={setHistory} />}
    {page === "login" && <LoginPage setPage={setPage} setHistory={setHistory} />}
    {page === "getStarted" && <GetStartedPage setPage={setPage} setHistory={setHistory} />}
    {page === "discover" && <Discover setPage={setPage} setHistory={setHistory} />}
    {page === "discuss" && <Discuss setPage={setPage} setHistory={setHistory} />}
    {page === "hack" && <Hackathon setPage={setPage} setHistory={setHistory} />}
    {page === "home" && <Home setPage={setPage} setHistory={setHistory} />}
    {history.length > 0 && (
        <button onClick={goBack}>Go Back</button>
    )}
</div>
    
  );
};

export default App;


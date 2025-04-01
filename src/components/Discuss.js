import React, { useState } from "react";
import styles from "./Discuss.module.css";

const chatServers = [
  { id: 1, name: "Design Enthusiasts" },
  { id: 2, name: "React Developers" },
  { id: 3, name: "Tech Talk" },
];

const Discuss = () => {
  const [currentServer, setCurrentServer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const joinChat = (server) => {
    setCurrentServer(server);
    setMessages([]); 
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "You" }]);
    setInput("");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Discuss</h1>
      </header>

      <main className={styles.main}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h2>Chat Servers</h2>
          <ul>
            {chatServers.map((server) => (
              <li key={server.id}>
                <button onClick={() => joinChat(server.name)}>
                  {server.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Container */}
        <div className={styles.chatContainer}>
          <h2>{currentServer ? `Chat Room: ${currentServer}` : "Select a Server to Chat"}</h2>
          <div className={styles.chatBox}>
          </div>
          {currentServer && (
            <div className={styles.chatInput}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Discuss;

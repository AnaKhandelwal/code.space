import React from "react";
import styles from "./Home.module.css";

const Home = ({ setPage, setHistory })=> {
  return (
    <>
      <img className={styles.logo} src="_code.space.png" alt="Logo" />
      <div className={styles.topnav}>
        <input type="text" className={styles.searchbar} placeholder=" Search" />
        <a href="#" onClick={() => {setHistory(prevHistory => [...prevHistory, "home"]); setPage("discuss");}}>Discuss</a>
        <a href="#"  onClick={() => {setHistory(prevHistory => [...prevHistory, "home"]); setPage("discover");}}>Discover</a>
        <a href="#"   onClick={() => {setHistory(prevHistory => [...prevHistory, "home"]); setPage("hack");}}>Hackathon</a>
        </div>
      <div className={styles.naviima}>
        <img src="/icons8-feed-24.png" alt="" />
        <img src="/icons8-user-groups-50.png" alt="" />
        <img src="/icons8-messages-50.png" alt="" />
        <img src="/icons8-bookmark-50.png" alt="" />
        <img src="/icons8-notification-50.png" alt="" />
        <img src="/icons8-settings-50.png" alt="" />
        <img src="/icons8-more-50.png" alt="" />
      </div>
      <div className={styles.navi}>
        <a href="" style={{ color: "#0070cc" }}>My Feed</a>
        <a href="">Groups</a>
        <a href="">Messages</a>
        <a href="">Bookmarks</a>
        <a href="">Notifications</a>
        <a href="">Settings</a>
        <a href="">More</a>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.starttyping}>
          <textarea className={styles.start} placeholder="start typing here"></textarea>
        </div>
        <div className={styles.starttypingimg}>
          
            <img src="/img/icons8-file-50.png" alt="" />
        
       
            <img src="/img/icons8-photo-50.png" alt="" />
      
          <div href="" className={styles.startImg}>
            <img src="/img/icons8-send-50.png" alt="" />
          </div>
        </div>
       
      </div>
      <div className={styles.rightSidebar}>
      <div className={styles.popups}>
          <a href="" style={{ color: "#0070cc", textDecoration: "underline" }}>
            Following
          </a>
          <a href="">Featured</a>
          <a href="">Rising</a>
        </div>
        <div className={styles.pro}>
          <h1>Introducing Pro</h1>
          <p>Build your programming skills with our premium version</p>
          <button type="submit" className={styles.registerbtn} onClick={() => alert("Get It Now clicked!")}>Get It Now</button>
        </div>
        <div className={styles.topics}>
          <h1>Trending Topics</h1>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo5SZUJVTzU5rNzJfuIFl5_r5987uLT7NlSUXHfN7rcb3vlxW1vw-&s=0" alt="Cybersecurity" />
            <div className={styles.cardContent}>
              <h3>Cybersecurity</h3>
              <p>As society becomes more digital, cybersecurity is becoming more important</p>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className={styles.card}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eU4r8oJDqwi_w9EfmqeIpb0t3p_P2LO8038v82l6MrI4jhVXV4Qo&s=0" alt="Edge Computing"/>
                    <div className={styles.cardContent}>
                        <h3>Edge Computing</h3>
                        <p>Data processing is moved closer to where it's needed, which saves time and bandwidth</p>
                        <a href="#">Learn more</a>
                    </div>  
          </div>
          <div className={styles.card}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9Mgv5XGI0sy9FubiujbQM29pNtEu6XCqLRSQf1FYm4FiWg_nDN3a&s=0" alt="Robotics"/>
                    <div className={styles.cardContent}>
                        <h3>Robotics</h3>
                        <p>Machines that can perform complex tasks autonomously or with minimal human oversight</p>
                        <a href="#">Learn more</a>
                    </div>

          </div>
          <div className={styles.card}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOca0SRy3xRaoL6bLRFT11fCYj4CAwAAL1M6Hax5DgrP9y6TbBKKr7&s=0" alt="Quantum Computing"/>
                    <div className={styles.cardContent}>
                        <h3>Quantum Computing</h3>
                        <p>Uses quantum bits (qubits) to perform faster and more complex calculations</p>
                        <a href="#">Learn more</a>
                    </div>

          </div>

        </div>
      </div>
    
      <div className={styles.user}>
        <div className={styles.postContainer}>
          <div className={styles.userInfo}>
            <div className={styles.profilePic}>
            <img src="https://media.istockphoto.com/id/1411901680/photo/happy-man-toothy-smile-positive-emotion-avatar.jpg?s=612x612&w=0&k=20&c=H7YtE74Fs0CuGYftk0UtPYdZtO3VgBF5cX2HYmCI0C4=" alt="User Profile"  />
            </div>
            <div>
              <h4 className={styles.username}>tmhao2005</h4>
              <p className={styles.timestamp}>2 hours ago</p>
            </div>
          </div>
          <div className={styles.postContent}>
            <h3 className={styles.postTitle}>TypeScript useful advanced types</h3>
            <p className={styles.postDescription}>
              As the title says, here are all the useful types that I'm using every day or create new types on top of them.
              I thought it might be handy for some people so I just share here and this will be updated moving forward:
            </p>
            <img src="https://www.globaltechcouncil.org/wp-content/uploads/2024/04/Features-of-TypeScript-in-React-1-768x768.png" alt="" style={{ width: "500px", height: "auto" }} />
          </div>
        </div>

        <div className={styles.postContainer}>
          <div className={styles.userInfo}>
            <div className={styles.profilePic}>
            <img src="https://media.istockphoto.com/id/1411901680/photo/happy-man-toothy-smile-positive-emotion-avatar.jpg?s=612x612&w=0&k=20&c=H7YtE74Fs0CuGYftk0UtPYdZtO3VgBF5cX2HYmCI0C4=" alt="User Profile"  />
            </div>
            <div>
              <h4 className={styles.username}>tmhao2005</h4>
              <p className={styles.timestamp}>2 hours ago</p>
            </div>
          </div>
          <div className={styles.postContent}>
            <h3 className={styles.postTitle}>TypeScript useful advanced types</h3>
            <p className={styles.postDescription}>
              As the title says, here are all the useful types that I'm using every day or create new types on top of them.
              I thought it might be handy for some people so I just share here and this will be updated moving forward:
            </p>
            <img src="https://www.globaltechcouncil.org/wp-content/uploads/2024/04/Features-of-TypeScript-in-React-1-768x768.png" alt="" style={{ width: "500px", height: "auto" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
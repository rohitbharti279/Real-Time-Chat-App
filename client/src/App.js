import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Components/Chat";


// connecting frontend to backend server
// const socket = io.connect("http://localhost:3001"); //this is the default
const socket = io.connect("https://real-time-chating.onrender.com"); //backend deployed on render.com

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    const trimUsername = username.trim();
    const trimRoom = room.trim();
    if (trimUsername !== "" && trimRoom !== "") {
      socket.emit("join_room", trimRoom);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>&#128279; Join a Chat &#x23f3;</h3>
          <input
            type="text"
            placeholder="Enter Nickname... "
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join a Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;

import "./App.css";
import io from "socket.io-client";


// connecting frontend to backend server
const socket = io.connect("http://localhost:3001");

function App() {

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;

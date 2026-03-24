import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5045");

function App() {
  useEffect(() => {
    socket.on("notification", (data) => {
      alert(data.message); // simple popup
    });
  }, []);

  return <h1>Deliveroo</h1>;
}

export default App;
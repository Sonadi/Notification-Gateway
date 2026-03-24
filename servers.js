const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

require("dotenv").config();

const app = express();
const server = http.createServer(app);

// ✅ Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "*", // allow frontend
  }
});

app.use(cors());
app.use(express.json());

// ✅ Make io accessible in routes
app.set("io", io);

// 🔌 Connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Routes
const notificationRoutes = require('./routes/notificationRoutes');
app.use('/api/notification', notificationRoutes);

const PORT = process.env.PORT || 5045;

// ⚠️ MUST use server.listen
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});